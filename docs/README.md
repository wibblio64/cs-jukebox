# 1.) Running from Source
To run the app from source, you just need Node (v24.19.0+) & NPM (v11.17.0+).

You can check if you have either Node or NPM installed by running "node --version" or "npm --version," respectively. But this tutorial will assume that you have them installed already.

Inside the folder containing the source, open up the terminal and type "npm install," to install all the dependencies needed. Next, type "npm run start" to actually start running the app. That's basically it, you're all set, after that.

![The app running correcWtly, showing the menu.](1/1.png)

# 2.) How To Add a Custom Album
To add a new album, make a new folder, in the "assets/music" folder.

![A new folder named "tutorial" in the music folder.](2/1.png)

Inside your music folder, add your song(s), in any format you want (preferably ".mp3" files).

![A new file named "example.mp3" your the music folder.](2/2.png)

Make a new ".json" file named after your music folder, in the "assets/data/albums" folder.

![A new ".json" in the albums folder matching the name of your music folder.](2/3.png)

Open the newly-created ".json" file and fill out the details as listed below.

![The structure of a album"s ".json" file.](2/4.png)

Congratulations! Your album should now appear in the menu, if you did all the steps correctly.

![The newly-created custom album in the menu.](2/5.png)