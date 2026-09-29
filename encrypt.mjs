// Build a password-gated index.html from src/index.html (kept out of git).
// Usage: SITE_PASSWORD='...' node encrypt.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { webcrypto as crypto } from "node:crypto";

const pw = process.env.SITE_PASSWORD;
if (!pw) { console.error("Set SITE_PASSWORD"); process.exit(1); }
const ITER = 600000;
const b64 = (u) => Buffer.from(u).toString("base64");
const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pw), "PBKDF2", false, ["deriveKey"]);
const key = await crypto.subtle.deriveKey({ name: "PBKDF2", salt, iterations: ITER, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["encrypt"]);
const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, new TextEncoder().encode(readFileSync("src/index.html", "utf8")));

writeFileSync("index.html", `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>Protected page</title>
<link rel="icon" href="favicon.svg">
<style>
body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#eaf2f4;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#1f3a40;padding:16px;box-sizing:border-box}
form{background:#fff;border:1px solid #d0dee1;border-radius:8px;padding:28px;width:100%;max-width:340px;box-sizing:border-box}
h1{font-size:17px;margin:0 0 14px}input,button{width:100%;box-sizing:border-box;font:inherit;padding:10px;border-radius:5px}
input{border:1px solid #b7c9cd;margin-bottom:10px}button{background:#1f6f7a;color:#fff;border:0;cursor:pointer}
#err{color:#b3261e;font-size:13px;min-height:18px;margin-top:8px}
</style></head><body>
<form id="f"><h1>This page is password protected</h1>
<input id="p" type="password" placeholder="Password" autocomplete="current-password" autofocus>
<button>Enter</button><div id="err"></div></form>
<script>
const D={s:"${b64(salt)}",i:"${b64(iv)}",c:"${b64(new Uint8Array(ct))}",n:${ITER}};
const u=b=>Uint8Array.from(atob(b),c=>c.charCodeAt(0));
async function open(pw){
  const k=await crypto.subtle.deriveKey({name:"PBKDF2",salt:u(D.s),iterations:D.n,hash:"SHA-256"},
    await crypto.subtle.importKey("raw",new TextEncoder().encode(pw),"PBKDF2",false,["deriveKey"]),
    {name:"AES-GCM",length:256},false,["decrypt"]);
  const html=new TextDecoder().decode(await crypto.subtle.decrypt({name:"AES-GCM",iv:u(D.i)},k,u(D.c)));
  try{sessionStorage.setItem("pw",pw)}catch(e){}
  document.open();document.write(html);document.close();
}
document.getElementById("f").onsubmit=async e=>{e.preventDefault();
  try{await open(document.getElementById("p").value)}catch(x){document.getElementById("err").textContent="Incorrect password"}};
try{const s=sessionStorage.getItem("pw");if(s)open(s).catch(()=>sessionStorage.removeItem("pw"))}catch(e){}
</script></body></html>
`);
console.log("Wrote index.html");
