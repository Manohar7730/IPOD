# [React-Ipod](https://manohar7730.github.io/IPOD/) <-- Explore

This project recreates the classic iPod interface and music player using React.
## Demo

![IPOD](https://github.com/Manohar7730/IPOD/assets/120391462/df94b51b-dfbd-4b2a-87b7-0719d7f4acd7)

## Features

- Responsive touch interface with rotating click wheel for navigation
- Lock screen requires unlock to access menus
- Now playing screen to control and view current song
- Menu navigation system modeled after original iPod OS
- Music library with album art and song playback
- Settings to change themes,wheelColors and wallpapers


## Usage/Examples

The click wheel supports the following touch gestures:

- To unlock screen you have to press center button and to lock screen you have to press menu button in main menu.
- To play and pause music in any menu you need to press play/pause button on bottom.
- Short pressing on forward/reverse will take you to next/previous track (ONLY WHILE PLAYING)
- Long pressing on forward/reverse will seek the song in forward/- reverse (ONLY WHILE PLAYING)
- To navigate between a menu items you need to rotate on track wheel
- To go to next menu or go inside a menu press center button and to go to previous menu press menu button
- Please checkout settings menu to change theme,wheelColor,wallpaper

## Screenshots

- Lockscreen and Menu
  
![LOCK-AND-MENU](https://github.com/Manohar7730/IPOD/assets/120391462/d96ca81c-120d-4680-9a75-d095d7517fc3)

- Theme Applied and Song Playing screen

![collage](https://github.com/Manohar7730/IPOD/assets/120391462/bcbfb1a7-64e3-4ee5-ac14-efa04d1020a5)


## Installation

1) Clone the repository:

```bash
    git clone https://github.com/yourname/react-ipod
    cd react-ipod
```  
2) Install dependencies:

```bash
    npm install
```

3) Run the application:

```bash
    npm run dev
```
    
## KEY COMPONENTs

- App - State management
- Case - Renders Display and Wheel
- Display - Shows active UI screen
- Wheel - Click wheel interface

##  Project Struture

```bash
|-- src - all code files
|   |-- components - all react components
|   |-- styles - all css files
|   |-- static - all static files
```

## Customization

Themes and wallpapers can be configured via the Settings menus.

To add new music, import audio files in App.js and add to state.


## Build With

- [React](https://react.dev/) - used class components and life cycle methods 
- [zingTouch](https://zingchart.github.io/zingtouch/) - gestures to control display using wheel


## Contributing

Pull requests are welcome. Please open an issue first to discuss changes.


## Authors

- [@Manohar7730](https://github.com/Manohar7730)


## Support

For support, email manohar20century@gmail.com
