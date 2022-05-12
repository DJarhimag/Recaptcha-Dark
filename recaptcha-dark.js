// ==UserScript==
// @name          reCAPTCHA Dark
// @description	  Dark theme for Google reCAPTHCHA
// @author        abhishekchakraborty
// @include       *://*/*
// @run-at        document-start
// @version       0.20170704181000
// ==/UserScript==
(function() {var css = [
	"@namespace url(http://www.w3.org/1999/xhtml);",
	"/* Bkgd */",
	"  .rc-anchor-light {",
	"    background-color: #222;",
	"    color: #0af1f3;",
	"  }",
	"  ",
	"  .rc-anchor-light.rc-anchor-normal {",
	"    border-color: #09ebf3;",
	"  }",
	"  ",
    "  /* Checkbox */",
	"  .recaptcha-checkbox-border {",
	"    background-color: #282828;",
	"  }",
	"  ",
	"  /** Image Page **/",
	"  ",
	"  /* Top text */",
	"  .rc-imageselect-desc-wrapper {",
	"    color: #0af1f3;",
	"  }",
	"  ",
	"  .rc-imageselect-candidates {",
	"    border-color: #0af1f3;",
	"  }",
	"  ",
	"  /* Image */",
	"  div#rc-imageselect {",
	"    background-color: #282828 !important;",
	"  }",
	"  ",
	"  /* Optional Message */",
	"  .rc-imageselect-incorrect-response, ",
	"  .rc-imageselect-error-dynamic-more, ",
	"  .rc-imageselect-error-select-more, ",
	"  .rc-imageselect-error-select-something {",
	"    background-color: #282828;",
	"  }",
	"  ",
	"  /* Footer */",
	"  .rc-separator {",
	"    border-top-color: #282828;",
	"  }",
	"  ",
	"  .rc-footer {",
	"    background-color: #282828;",
	"  }",
	"  ",
	"  .rc-button {",
	"    filter: invert(80%);",
	"  }",
	"  ",
	"  .rc-challenge-help {",
	"    color: #aaaaaa;",
	"  }"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
