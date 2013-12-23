
function WebPageViewer2_Init() {

    Qva.AddExtension("WebPageViewer2",
        function () {

            var _this = this;
            _this.ExtSettings = {};
            _this.ExtSettings.ExtensionName = 'WebPageViewer2';
            _this.ExtSettings.LoadUrl = Qva.Remote + (Qva.Remote.indexOf('?') >= 0 ? '&' : '?') + 'public=only' + '&name=';

            LoadCSS();
            ConsoleClear();
            InitSettings();
            Init();
            InitControls();
            InitContent();

            // Load CSS Files
            function LoadCSS() {
                var cssFiles = [];
                cssFiles.push('Extensions/' + _this.ExtSettings.ExtensionName + '/lib/css/style.css');
                for (var i = 0; i < cssFiles.length; i++) {
                    Qva.LoadCSS(_this.ExtSettings.LoadUrl + cssFiles[i]);
                }
            }
            

            // ------------------------------------------------------------------
            // Main Extension Code - Initialization
            // ------------------------------------------------------------------
            function Init() {

                ConsoleInfo(_this.ExtSettings.ExtensionName + ": Init");

                if (!_this.ContainerCreated) {

                    var $divBlank = $(document.createElement("div"));
                    $divBlank.attr("id", "divBlank_" + _this.ExtSettings.UniqueId);
                    $divBlank.addClass("WebPageViewer2_divBlank");
                    $divBlank.css("display", "none");
                    $divBlank.click(function () {
                        var $blankMsg = $("#divBlankMsg_" + _this.ExtSettings.UniqueId);
                        if (!nullOrEmpty(_this.ExtSettings.InteractionMessage)) {
                            $blankMsg.fadeIn(300).delay(2000).fadeOut(5000);
                        }
                    });
                    $(_this.Element).append($divBlank);

                    var $divBlankMsg = $(document.createElement("div"));
                    $divBlankMsg.attr("id", "divBlankMsg_" + _this.ExtSettings.UniqueId);
                    $divBlankMsg.addClass("WebPageViewer2_divBlankMsg");
                    $divBlankMsg.hide();
                    $divBlankMsg.css("zIndex", 100);
                    $divBlankMsg.text(_this.ExtSettings.InteractionMessage);
                    $(_this.Element).append($divBlankMsg);

                    var $ifrm = $(document.createElement("iframe"));
                    $ifrm.attr("id", "ifrm_" + _this.ExtSettings.UniqueId);
                    $ifrm.attr("frameborder",0);
                    $ifrm.width(_this.GetWidth() + "px");
                    $ifrm.height(_this.GetHeight() + "px");
                    $ifrm.load(function () {
                        $ifrm.fadeIn(100);
                    });
                    $(_this.Element).append($ifrm);
                    _this.ContainerCreated = true;

                }
            }

            function InitContent() {

                ConsoleInfo(_this.ExtSettings.ExtensionName + ": Init Content");

                var $ifrm = $("#ifrm_" + _this.ExtSettings.UniqueId);
                $ifrm.fadeOut(100);
                $ifrm.attr("src", _this.ExtSettings.WebPageUrl);
            }

            function InitControls() {

                ConsoleInfo(_this.ExtSettings.ExtensionName + ": Init Controls");

                var $ifrm = $("#ifrm_" + _this.ExtSettings.UniqueId);
                $ifrm.width(_this.GetWidth() + "px");
                $ifrm.height(_this.GetHeight() + "px");
                $ifrm.css("zIndex", -1);

                var $divBlank = $("#divBlank_" + _this.ExtSettings.UniqueId);
                if (_this.ExtSettings.PreventInteraction) {
                    $divBlank.width($ifrm.width());
                    $divBlank.height($ifrm.height());
                    $divBlank.css("zIndex", 50);
                    $divBlank.show();
                }
                else {
                    $divBlank.hide();
                }


            }

            // ------------------------------------------------------------------
            // Initialize Settings
            // ------------------------------------------------------------------
            function InitSettings() {

                ConsoleInfo(_this.ExtSettings.ExtensionName + ": Init Settings");

                _this.ExtSettings.UniqueId = _this.Layout.ObjectId.replace("\\", "_");
                _this.ExtSettings.ContainerId = "Container_" + _this.ExtSettings.UniqueId;
                _this.ExtSettings.WebPageUrl = _this.Layout.Text0.text;
                _this.ExtSettings.PreventInteraction = (_this.Layout.Text1.text == '1') ? true : false;
                _this.ExtSettings.InteractionMessage = _this.Layout.Text2.text;

                ConsoleLog("\tWeb Page Url: " + _this.ExtSettings.WebPageUrl);
                ConsoleLog("\tPrevent Interaction: " + _this.ExtSettings.PreventInteraction);
                ConsoleLog("\tInteraction Message: " + _this.ExtSettings.InteractionMessage);
            }

            // ------------------------------------------------------------------
            // Extension helper functions
            // ------------------------------------------------------------------
            function ConsoleLog(msg) {
                if (typeof console != "undefined") {
                    console.log(msg);
                }
            }
            function ConsoleInfo(msg) {
                if (typeof console != "undefined") {
                    console.info(msg);
                }
            }
            function ConsoleError(msg) {
                if (typeof console != "undefined") {
                    console.error(msg);
                }
            }
            function ConsoleWarn(msg) {
                if (typeof console != "undefined") {
                    console.warn(msg);
                }
            }
            function ConsoleClear() {
                if (typeof console != "undefined") {
                    console.clear();
                }
            }

            // ------------------------------------------------------------------
            // Basic helper functions
            // ------------------------------------------------------------------
            function nullOrEmpty(obj) {
                if (obj == null || obj.length == 0 || obj == 'undefined') {
                    return true;
                }
                return false;
            }

        })
};
WebPageViewer2_Init();
