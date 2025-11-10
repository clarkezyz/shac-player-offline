# Build Instructions

This document explains how to build SHAC Player Desktop installers for all platforms.

---

## Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Build All Platforms
```bash
npm install
npm run build
```

Installers will be in the `dist/` folder.

---

## Platform-Specific Builds

### Linux
```bash
npm run build:linux
```

**Outputs:**
- `dist/SHAC Player-1.0.0.AppImage` - Universal Linux package
- `dist/shac-player_1.0.0_amd64.deb` - Debian/Ubuntu package

### Windows
```bash
npm run build:win
```

**Outputs:**
- `dist/SHAC Player Setup 1.0.0.exe` - NSIS installer
- `dist/SHAC Player 1.0.0.exe` - Portable executable

### macOS
```bash
npm run build:mac
```

**Outputs:**
- `dist/SHAC Player-1.0.0.dmg` - macOS disk image
- `dist/SHAC Player-1.0.0-mac.zip` - Zipped app bundle

---

## GitHub Actions (Recommended)

The easiest way to build for all platforms is via GitHub Actions. The workflow automatically builds Windows, macOS, and Linux installers whenever you create a release.

### Create a Release via GitHub Actions

1. **Tag a version:**
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. **Create a GitHub Release:**
   - Go to your repository on GitHub
   - Click "Releases" → "Create a new release"
   - Select your tag (v1.0.0)
   - Add release notes
   - Click "Publish release"

3. **Wait for builds:**
   - GitHub Actions will automatically build all platform installers
   - Builds take ~10-15 minutes
   - Installers are automatically uploaded to the release

4. **Download installers:**
   - Once the action completes, all installers will be attached to the release
   - Users can download directly from the Releases page

---

## Cross-Platform Building (Advanced)

### Building on Linux

**Windows builds from Linux:** ✅ Works
- electron-builder can create Windows installers from Linux
- No special configuration needed

**macOS builds from Linux:** ⚠️ Limited
- Cannot code-sign without macOS
- Can create unsigned DMG files
- Users will see security warnings on macOS

### Building on macOS

**All platforms:** ✅ Works
- macOS can build for Windows, macOS, and Linux
- Requires Docker for Linux builds

### Building on Windows

**Windows builds:** ✅ Works
**macOS builds:** ❌ Cannot build
**Linux builds:** ⚠️ Requires WSL or Docker

---

## Code Signing (Optional)

Code signing prevents security warnings when users install your app.

### Windows Code Signing

1. Purchase a Windows code signing certificate
2. Add to `package.json`:
   ```json
   "win": {
     "certificateFile": "path/to/cert.pfx",
     "certificatePassword": "your-password"
   }
   ```

### macOS Code Signing

1. Enroll in Apple Developer Program ($99/year)
2. Generate certificates in Xcode
3. Add to `package.json`:
   ```json
   "mac": {
     "identity": "Developer ID Application: Your Name (TEAM_ID)"
   }
   ```

**Note:** Code signing is optional. Unsigned apps work fine but show security warnings.

---

## Troubleshooting

### Permission Errors on Linux

If you get permission errors during build:
```bash
sudo find node_modules -type f -path '*/bin/*' -exec chmod 775 {} +
sudo chmod 775 node_modules/electron-builder/cli.js
sudo chmod 775 node_modules/app-builder-bin/linux/x64/app-builder
sudo find node_modules/7zip-bin -type f -exec chmod 775 {} +
```

### Missing Dependencies

If electron-builder fails with missing dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Out of Memory

If builds fail with memory errors, increase Node.js memory:
```bash
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

---

## Build Configuration

All build settings are in `package.json` under the `"build"` key.

**Key settings:**
- `appId` - Unique application identifier
- `productName` - Display name shown to users
- `files` - Which files to include in builds
- `win/mac/linux` - Platform-specific settings
- `fileAssociations` - Register .shac file type

See [electron-builder documentation](https://www.electron.build/configuration/configuration) for full options.

---

## Automated Builds

The included GitHub Actions workflow (`.github/workflows/build.yml`) handles:
- Building for all platforms on every release
- Automatically uploading installers to GitHub Releases
- Running builds in parallel for speed

**No manual building required** - just create a GitHub release and the workflow does the rest.

---

## Development Builds

To test the app without building installers:

```bash
npm install
npm start
```

This runs the app in development mode with instant reloads.

---

## Questions?

See the [electron-builder docs](https://www.electron.build/) or open an issue on GitHub.
