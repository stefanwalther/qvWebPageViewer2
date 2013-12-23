QlikView Extension - WebPageViewer2
===

QlikView Extension to display a web page in QlikView.

This is a replacement for the WebPageViewer extension which is installed as one of the extension examples when installing QlikView 11.

Features
--------

Basically this only fixes one bug of the WebPageViewer extension and adds a single new feature:

* **Bugfix for multiple instances of WebPageViewer on one sheet**
  The standard WebPageViewer extension does not allow to place multiple instances of the extension on one sheet.

* **New Feature Prevent Interaction**
  If this option is ticked the user will not be able to interact with the web page loaded in the extension (e.g. clicking on links, etc.)

Screenshots
-----------

__Adding the WebPageViewer2 Extension:__
![Adding the WebPageViewer2 Extension](https://raw.github.com/stefanwalther/QlikView_Extension_WebPageViewer2/master/gh-pages/images/WebPageViewer2_AddExtensionObject.png)


__Configuration Dialog:__
![Configuration Dialog](https://raw.github.com/stefanwalther/QlikView_Extension_WebPageViewer2/master/gh-pages/images/WebPageViewer2_PropertyDialog.png)


Installation & Configuration
----------------------------

1. Download the extension
1. Install the extension on your local computer (doubleclick on the .qar file)
1. Drag'n'Drop the extension within QlikView Desktop (using WebView)
1. Set the desired properties:
   * Set the web page Url
   * Define whether interaction with the loaded web site should be prevented or not
1. Finally deploy the extension to your server (-> detailed instruction)


License
-------
The software is made available "AS IS" without any warranty of any kind under the MIT License (MIT).
Since this is a private project QlikTech support agreement does not cover support for this software.

Credits
-------

* Icon set(s) used for this solution:
 * "Batch Icons" by Adam Whitcroft (http://adamwhitcroft.com/batch/)
