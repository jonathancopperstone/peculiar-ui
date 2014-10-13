angular.module('peculiar.templates', []).run(['$templateCache', function($templateCache) {
  $templateCache.put("peculiar/header/tpls/header.tpl.html",
    "<div class=\"pu-header\" data-ng-transclude></div>\n" +
    "");
  $templateCache.put("peculiar/section/tpls/code.tpl.html",
    "<div class=\"pu-section-block pu-section-code\" data-ng-transclude></div>\n" +
    "");
  $templateCache.put("peculiar/section/tpls/display.tpl.html",
    "<div class=\"pu-section-block pu-section-display\" data-ng-transclude></div>\n" +
    "");
  $templateCache.put("peculiar/section/tpls/section.tpl.html",
    "<section class=\"pu-section\" data-ng-transclude>\n" +
    "</section>\n" +
    "");
  $templateCache.put("peculiar/section/tpls/table.tpl.html",
    "<div class=\"pu-section-block pu-section-table\">\n" +
    "  <div style=\"display:none;\" data-ng-transclude></div>\n" +
    "  <table class=\"pu-table\" data-ng-if=\"data\">\n" +
    "    <tr class=\"pu-row\" data-ng-repeat=\"row in data\">\n" +
    "      <td class=\"pu-cell\" data-ng-repeat=\"cell in row\"> {{ cell }} </td>\n" +
    "    </tr>\n" +
    "  </table>\n" +
    "</div>\n" +
    "");
  $templateCache.put("peculiar/section/tpls/text.tpl.html",
    "<div class=\"pu-section-block pu-section-text\" data-ng-transclude></div>\n" +
    "");
}]);
