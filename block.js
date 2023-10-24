// ==UserScript==
// @name         Bouncer - YouTube
// @namespace    https://www.logstr.io/
// @version      1.0
// @author       Eleslie-xy
// @credits      GSRHackZ 
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/*
// @grant        none
// ==/UserScript==

let ogVolume=1;
let pbRate = 1;

setInterval(function(){
    if(document.getElementsByClassName("video-stream html5-main-video")[0]!==undefined){
        let ad = document.getElementsByClassName("video-ads ytp-ad-module")[0];
        let vid = document.getElementsByClassName("video-stream html5-main-video")[0];
        if(ad==undefined){
            pbRate = vid.playbackRate;
        }
        let closeAble = document.getElementsByClassName("ytp-ad-overlay-close-button");
        for(let i=0;i<closeAble.length;i++){
            closeAble[i].click();
            //console.log("ad banner closed!")
        }
        if(document.getElementsByClassName("style-scope ytd-watch-next-secondary-results-renderer sparkles-light-cta GoogleActiveViewElement")[0]!==undefined){
            let sideAd=document.getElementsByClassName("style-scope ytd-watch-next-secondary-results-renderer sparkles-light-cta GoogleActiveViewElement")[0];
            sideAd.style.display="none";
            //console.log("side ad removed!")
        }
        if(document.getElementsByClassName("style-scope ytd-item-section-renderer sparkles-light-cta")[0]!==undefined){
            let sideAd_ = document.getElementsByClassName("style-scope ytd-item-section-renderer sparkles-light-cta")[0];
            sideAd_.style.display="none";
            //console.log("side ad removed!")
        }
        if(document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text")[0]!==undefined){
            let skipBtn=document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text")[0];
            skipBtn.click();
            //console.log("skippable ad skipped!")
        }
        if(document.getElementsByClassName("ytp-ad-message-container")[0]!==undefined){
            let incomingAd=document.getElementsByClassName("ytp-ad-message-container")[0];
            incomingAd.style.display="none";
            //console.log("removed incoming ad alert!")
        }
        if(document.getElementsByClassName("style-scope ytd-companion-slot-renderer")[0]!==undefined){
            document.getElementsByClassName("style-scope ytd-companion-slot-renderer")[0].remove();
            //console.log("side ad removed!")
        }
        if(document.getElementsByClassName("ytd-in-feed-ad-layout-renderer sparkles-light-cta")[0]!==undefined){
            document.getElementsByClassName("ytd-in-feed-ad-layout-renderer sparkles-light-cta")[0].remove();
            //console.log("removed sturbborn side ad")
        }
        if(document.getElementsByClassName("ytd-video-display-full-buttoned-renderer")[0]!==undefined){
            document.getElementsByClassName("ytd-video-display-full-buttoned-renderer")[0].remove();
            //console.log("removed sturbborn side ad")
        }
        if(document.getElementById("ad-inline-playback-metadata")[0]!==undefined){
            document.getElementById("ad-inline-playback-metadata")[0].remove();
            //console.log("removed sturbborn homepage ad")
        }
        if(document.getElementById("thumbnail-container")[0]!==undefined){
            document.getElementById("thumbnail-container")[0].remove();
            //console.log("removed sturbborn homepage ad")
        }
        if(ad!==undefined){
            if(ad.children.length>0){
                if(document.getElementsByClassName("ytp-ad-text ytp-ad-preview-text")[0]!==undefined){
                    vid.playbackRate=16;
                    //console.log("Incrementally skipped unskippable ad!")
                }
            }
        }
    }
},100)