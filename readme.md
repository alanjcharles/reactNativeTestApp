**Setup Process IOS**

-Clone Repo
- Go into the reactNativeTestApp directory via `cd reactNativeTestApp`
- Now execute these commands
    - `yarn add @segment/analytics-react-native`
    - `yarn react-native link`
    - `cd iOS`
    - `pod install`
    - `cd ..`
- Open the `reactNativeTestApp` directory your code editor.
- In your code editor, open `App.js`
    - `import analytics from '@segment/analytics-react-native'`
    - Go down to the bottom of the file, just below `export default App`
    - cd aweAdd `analytics.setup('<YOUR WRITE KEY>', {})`
    
**Additional Setup Information**    
- Open Xcode
- Go to File→Open
    - Select the directory of reactNativeTestApp/iOS and open reactNativeTestApp.xcworkspace
- Now do Product→Build in Xcode
    - When this is complete, you should see a command line window open called “Metro”.
- Now do Product→Run in Xcode
    - This will start the Simulator and install your reactNativeTestApp app into it.
    
**Android [Coming Soon]**
