# Vercel 404 Error - Step-by-Step Fix

## 🔍 Current Issue
You're seeing `404: NOT_FOUND` at `https://rti-rajasthan.vercel.app`

This means Vercel can't find your `index.html` file or the build output.

---

## ✅ STEP-BY-STEP SOLUTION

### Step 1: Verify vercel.json Location

The `vercel.json` file MUST be in the **root of your repository** (same level as `Frontend/` folder).

**Check:**
```
RTI-Rajasthan/
├── vercel.json          ← MUST BE HERE
├── Frontend/
│   ├── package.json
│   ├── src/
│   └── ...
└── ...
```

**If it's not there:**
1. Move `vercel.json` to the repository root
2. Commit and push

---

### Step 2: Configure Vercel Dashboard (CRITICAL)

Even with `vercel.json`, you MUST configure these settings in Vercel:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Click on your project: `rti-rajasthan`

2. **Navigate to Settings → General**

3. **Set these values EXACTLY:**

   ```
   Root Directory: Frontend
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

4. **Framework Preset:** Leave as "Other" or "Vite" (if available)

5. **Click "Save"**

---

### Step 3: Check Deployment Logs

1. Go to **Deployments** tab in Vercel
2. Click on the latest deployment
3. Check the **Build Logs**

**Look for:**
- ✅ "Build completed successfully"
- ✅ "Output Directory: Frontend/dist"
- ❌ Any errors about missing files
- ❌ Any errors about build failing

**Common Issues:**
- If you see "No Output Directory found" → Step 2 wasn't configured correctly
- If you see build errors → Check the error message

---

### Step 4: Force Redeploy

After making changes:

1. **Option A: Push a new commit**
   ```bash
   git add vercel.json
   git commit -m "Fix Vercel deployment configuration"
   git push
   ```
   Vercel will auto-deploy

2. **Option B: Manual Redeploy**
   - Go to Vercel Dashboard → Deployments
   - Click "..." on latest deployment
   - Click "Redeploy"

---

### Step 5: Verify Build Output

**Test locally first:**

```bash
cd Frontend
npm install
npm run build
ls -la dist/
```

**You should see:**
- `index.html`
- `assets/` folder
- Other build files

**If `dist/` is empty or missing:**
- Build is failing
- Check `npm run build` output for errors

---

## 🔧 ALTERNATIVE: Simplified vercel.json

If the current one doesn't work, try this simpler version:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Then configure everything in Vercel Dashboard:**
- Root Directory: `Frontend`
- Build Command: `npm run build`
- Output Directory: `dist`

---

## 🚨 TROUBLESHOOTING CHECKLIST

- [ ] `vercel.json` is in repository root (not in `Frontend/`)
- [ ] `vercel.json` is committed to git
- [ ] Vercel Dashboard → Settings → Root Directory = `Frontend`
- [ ] Vercel Dashboard → Settings → Output Directory = `dist`
- [ ] Vercel Dashboard → Settings → Build Command = `npm run build`
- [ ] Local build works (`cd Frontend && npm run build`)
- [ ] `Frontend/dist/index.html` exists after local build
- [ ] Latest deployment shows "Ready" status
- [ ] Deployment logs show successful build

---

## 📋 QUICK FIX COMMANDS

If you want to test everything locally first:

```bash
# 1. Test build
cd Frontend
npm install
npm run build

# 2. Verify output
ls -la dist/
# Should see index.html

# 3. Test locally
npm run preview
# Visit http://localhost:4173
# If this works, Vercel should work too
```

---

## 🎯 MOST LIKELY ISSUE

Based on your error, the **most common cause** is:

**Vercel Dashboard settings not configured correctly**

Specifically:
- Root Directory is probably set to `.` (root) instead of `Frontend`
- Output Directory might be missing or wrong

**Fix:**
1. Go to Vercel Dashboard → Settings → General
2. Set Root Directory to: `Frontend`
3. Set Output Directory to: `dist`
4. Save and redeploy

---

## 📞 Still Not Working?

If after all these steps you still get 404:

1. **Check deployment logs** - What error does it show?
2. **Verify build succeeds** - Does `npm run build` work locally?
3. **Check file structure** - Is `Frontend/dist/index.html` created?
4. **Contact Vercel Support** - Use the error ID from the 404 page

---

## ✅ SUCCESS INDICATORS

You'll know it's working when:
- ✅ Root URL (`https://rti-rajasthan.vercel.app`) loads your homepage
- ✅ Direct routes work (e.g., `/about-us`)
- ✅ Page refresh works on any route
- ✅ No 404 errors in browser console

