/**
 * Copyright 2013 Tealeaf Technology, Inc.
 * All rights reserved.
 *
 * THIS SOFTWARE IS PROVIDED BY TEALEAF "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING,
 * BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT ARE DISCLAIMED.
 * IN NO EVENT SHALL TEALEAF BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

// Default configuration
(function () {
    "use strict";
    /**
     * Due to issue with lack of change event propagation on legacy IE (W3C version of UIC)
     * its mandatory to provide more specific configuration on IE6, IE7, IE8 and IE9 in legacy
     * compatibility mode. For other browsers changeTarget can remain undefined as it is
     * sufficient to listen to the change event at the document level.
     */
    var changeTarget;
    /*@cc_on
    if (@_jscript_version < 9 || (window.performance && document.documentMode < 9)) {
        changeTarget = typeof jQuery === "function" ? changeTarget : "input, select, textarea, button";
    }
    @*/

    window.TLT.init({
        core: {
            moduleBase: 'intermediate/modules/',
            modules: {
                performance: {
                    events: [
                        { name: "load", target: window },
                        { name: "unload", target: window }
                    ]
                },
                replay: {
                    events: [
                        { name: "change", target: changeTarget, recurseFrames: true },
                        { name: "click", recurseFrames: true },
                        { name: "hashchange", target: window },
                        { name: "focus", target: "input, select, textarea, [contenteditable], button", recurseFrames: true },
                        { name: "blur", target: "input, select, textarea, [contenteditable], button", recurseFrames: true },
                        { name: "load", target: window},
                        { name: "unload", target: window},
                        { name: "resize", target: window},
                        { name: "scroll", target: window},
                        { name: "orientationchange", target: window},
                        { name: "touchstart" },
                        { name: "touchmove" },
                        { name: "touchend" }
                    ]
                }
            }
        },
        services: {
            queue: [
                {
                    qid: "DEFAULT",
                    endpoint: "/TealeafTarget.jsp",
                    maxEvents: 50,
                    serializer: "json"
                }
            ],
            message: {
                privacy: [
                    {
                        targets: [
                            // CSS Selector: All password input fields
                            "input[type=password]"
                        ],
                        "maskType": 3
                    }
                ]
            }
        },
        modules: {
            performance: {
                filter: {
                    navigationStart: false,
                    unloadEventStart: false,
                    unloadEventEnd: false,
                    redirectStart: false,
                    redirectEnd: false,
                    fetchStart: false,
                    domainLookupStart: false,
                    domainLookupEnd: false,
                    connectStart: false,
                    connectEnd: false,
                    secureConnectionStart: false,
                    requestStart: false,
                    responseStart: false,
                    responseEnd: false,
                    domLoading: false,
                    domInteractive: false,
                    domContentLoadedEventStart: false,
                    domContentLoadedEventEnd: false,
                    domComplete: false,
                    loadEventStart: false,
                    loadEventEnd: false
                }
            }
        }
    });
}());
