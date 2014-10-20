angular.module('peculiar.templates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("src/peculiar/header/tpls/header.tpl.html",
    "<div class=\"pu-header\" data-ng-transclude></div>\n" +
    "");
  $templateCache.put("src/peculiar/section/tpls/code.tpl.html",
    "<div class=\"pu-section-block pu-section-code\" data-ng-transclude></div>\n" +
    "");
  $templateCache.put("src/peculiar/section/tpls/display.tpl.html",
    "<div class=\"pu-section-block pu-section-display\">\n" +
    "  <label data-ng-if=\"displayLabel\" class=\"pu-section-display-label\">{{ displayLabel }}</label>\n" +
    "  <div class=\"pu-section-display-window\" data-ng-transclude></div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/peculiar/section/tpls/section.tpl.html",
    "<section class=\"pu-section\" data-ng-transclude>\n" +
    "</section>\n" +
    "");
  $templateCache.put("src/peculiar/section/tpls/table.tpl.html",
    "<div class=\"pu-section-block pu-section-table\">\n" +
    "\n" +
    "  <table class=\"pu-table\" data-ng-if=\"data\">\n" +
    "    <tr class=\"pu-row\" data-ng-repeat=\"row in data track by $index\">\n" +
    "      <td class=\"pu-cell\" data-ng-repeat=\"cell in row track by $index\"> {{ cell }} </td>\n" +
    "    </tr>\n" +
    "  </table>\n" +
    "  <div style=\"display:none;\" data-ng-transclude></div>\n" +
    "</div>\n" +
    "");
  $templateCache.put("src/peculiar/section/tpls/text.tpl.html",
    "<div class=\"pu-section-block pu-section-text\" data-ng-transclude></div>\n" +
    "");
}]);
