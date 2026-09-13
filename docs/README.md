# 1.) Running
To run the app from source, you just need Node (v24.19.0+) & NPM (v11.17.0+).

You can check if you have either Node or NPM installed by running "node --version" or "npm --version," respectively. But this tutorial will assume that you have them installed already.

Inside the folder containing the source, open up the terminal and type "npm install," to install all the dependencies needed in the main folder. Then, type "cd src" to enter the source folder, and again type "npm install" to get all dependencies needed for the source, too. Go back to the root folder, and then, type "npm run start" to actually start running the app. If it opens, that's basically it, you're all set, after that.

# 2.) Building
To build from source, follow all thr steps from the guide above about running from source.

Once you actually have the app successfully working, you can type "npm run build" to actually build the app. It will create a "dist" folder, containing packages for Windows and Linux in separate folders appropriately named "windows" and "linux."

MacOS is currently not supported.

![The app running correcWtly, showing the menu.](1/1.png)

# 3.) Adding a Custom Album
To add a new album, make a new folder, in the "package.nw/public/music" folder.

![A new folder named "tutorial" in the music folder.](3/1.png)

Inside your music folder, add your song(s), in any format you want (preferably ".mp3" files).

![A new file named "example.mp3" your the music folder.](3/2.png)

Make a new ".json" file named after your music folder, in the "package.nw/public/data/albums" folder.

![A new ".json" in the albums folder matching the name of your music folder.](3/3.png)

Open the newly-created ".json" file and fill out the details as listed below.

![The structure of a album"s ".json" file.](3/4.png)

Congratulations! Your album should now appear in the menu, if you did all the steps correctly.

![The newly-created custom album in the menu.](3/5.png)