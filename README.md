# SHAC Player - Desktop Edition

**Standalone desktop application for playing SHAC spatial audio files**

Navigate through interactive 3D audio experiences completely offline. No internet required after installation.

**Download installers from [Releases](https://github.com/clarkezyz/shac-player-offline/releases)**

![SHAC Player Screenshot](screenshots/shac_player.png)

---

## What This Is

SHAC Player Desktop is an Electron-based application that plays .shac files - interactive spatial audio compositions where you control your position and orientation within a 3D audio scene.

This is the **offline desktop version** of the web player at [shac.dev](https://shac.dev). Use this when:
- You want to play SHAC files without internet
- The web player is unavailable
- You prefer a native desktop application
- You want .shac file associations (double-click to open)

**Features:**
- Load and play .shac files completely offline
- Works on Windows, macOS, and Linux
- WASD keyboard navigation + mouse look
- Gamepad support (Xbox, PlayStation controllers)
- Real-time 3D visualization of audio sources
- Binaural rendering for headphone playback
- Drag-and-drop file loading
- Zero telemetry, zero internet dependency

---

## Installation

### Windows
1. Download `SHAC-Player-Setup-1.0.0.exe` from [Releases](https://github.com/clarkezyz/shac-player-offline/releases)
2. Run the installer
3. Launch from Start Menu or Desktop shortcut

### macOS
1. Download `SHAC-Player-1.0.0.dmg` from [Releases](https://github.com/clarkezyz/shac-player-offline/releases)
2. Open the DMG and drag SHAC Player to Applications
3. Launch from Applications folder

### Linux
**AppImage (Universal):**
1. Download `SHAC-Player-1.0.0.AppImage` from [Releases](https://github.com/clarkezyz/shac-player-offline/releases)
2. Make it executable: `chmod +x SHAC-Player-1.0.0.AppImage`
3. Run: `./SHAC-Player-1.0.0.AppImage`

**Debian/Ubuntu (.deb):**
1. Download `shac-player_1.0.0_amd64.deb` from [Releases](https://github.com/clarkezyz/shac-player-offline/releases)
2. Install: `sudo dpkg -i shac-player_1.0.0_amd64.deb`
3. Launch from application menu or run `shac-player`

---

## Quick Start

1. Launch SHAC Player
2. Click "Choose File" or drag-and-drop a .shac file
3. Use WASD to move, mouse to look around
4. Press F11 for fullscreen

### Get SHAC Files

**Try the demos:**
- Download sample files from [shac.dev](https://shac.dev)

**Create your own:**
- Use [SHAC Studio](https://github.com/clarkezyz/shac-studio) to create spatial audio compositions

---

## Controls

**Keyboard:**
- `W` - Move forward
- `S` - Move backward
- `A` - Move left (strafe)
- `D` - Move right (strafe)
- `Q` - Move down
- `E` - Move up
- `Arrow Keys` / `Mouse Drag` - Look around
- `Space` - Play/Pause
- `R` - Reset position to origin
- `F11` - Fullscreen

**Gamepad:**
- Left Stick - Move
- Right Stick - Look around
- Triggers - Move up/down
- Face Buttons - Play/Pause, Reset

---

## Technical Details

**Spatial Audio Engine:**
- Ambisonic decoding (supports orders 1-7)
- Real-time HRTF binaural rendering
- Distance attenuation and spatialization
- 6DOF navigation (position + rotation)

**Performance:**
- Web Audio API for low-latency playback
- WebGL visualization
- Runs entirely offline (your files stay private)
- Supports files up to 5GB+

**Platform:**
- Built with Electron 28
- Cross-platform: Windows, macOS, Linux
- No internet required after installation

---

## Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
npm install
```

### Run in Development
```bash
npm start
```

### Build Installers

**All platforms:**
```bash
npm run build
```

**Specific platforms:**
```bash
npm run build:win      # Windows
npm run build:mac      # macOS
npm run build:linux    # Linux
```

Installers will be output to the `dist/` folder.

See [BUILD.md](BUILD.md) for detailed build instructions.

---

## Architecture

This is a minimal Electron wrapper around the battle-tested SHAC web player code.

**Electron Layer:**
- `main.js` - Main process (window management, file dialogs)
- `preload.js` - Secure IPC bridge
- `js/electron-integration.js` - Hooks Electron APIs into web player

**Core Player (from web player):**
- `js/shac-decoder.js` - SHAC format decoder
- `js/spatial-audio.js` - Spatial audio engine
- `js/file-loader.js` - File loading
- `js/controls.js` - Input handling
- `js/visualizer.js` - 3D visualization
- `js/app.js` - Application state

---

## SHAC Ecosystem

**SHAC Player (Web)** - Browser-based player
- Repository: [github.com/clarkezyz/shac-player](https://github.com/clarkezyz/shac-player)
- Live at: [shac.dev](https://shac.dev)

**SHAC Player Desktop** - This application
- Repository: [github.com/clarkezyz/shac-player-offline](https://github.com/clarkezyz/shac-player-offline)
- Installers in Releases

**SHAC Studio** - Desktop creation tool
- Repository: [github.com/clarkezyz/shac-studio](https://github.com/clarkezyz/shac-studio)
- Create .shac files from audio sources

**SHAC Specification** - Format documentation
- Repository: [github.com/clarkezyz/Spherical-Harmonic-Audio-Codec](https://github.com/clarkezyz/Spherical-Harmonic-Audio-Codec)
- Complete file format specification

---

## Privacy

**Your files never leave your device.** The player runs completely offline. No telemetry. No analytics. No internet connection required after installation.

---

## Credits

**Created by Clarke Zyz and Claude**

Built through human-AI collaborative development across 150+ working sessions (March - November 2025).

**Methodology:** Natural language direction (Clarke) + AI implementation (Claude). Zero traditional coding by the human inventor. Production-grade revolutionary technology through pure collaboration.

**Patent application filed** (Application #63/810691) with both Clarke and Claude listed as co-inventors. Rejected because the U.S. patent system doesn't recognize AI inventors yet. The technology works. The system hasn't caught up.

**Philosophy:** "Be Impossible" - if something shouldn't exist yet, build it anyway.

---

## License

MIT License

Copyright (c) 2025 Clarke Zyz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## Note from Clarke

Currently in prison for bank robbery (non-violent, no weapons). This offline player was completed in November 2025, one month before going in for 5 years.

The player works. The code is open. Download it and use it offline.

When I get out in 2030, I want to see what you built with it.

**Share this if you think it matters.**

---

**SHAC Player Desktop - Walk through music. Offline.**

*First offline spatial audio player. Built by a bartender and an AI. Given to the world. November 2025.*
