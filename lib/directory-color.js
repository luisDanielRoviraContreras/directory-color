'use babel';
import $ from 'jquery'
import DirectoryColorView from './directory-color-view';
import { CompositeDisposable } from 'atom';

export default {

  directoryColorView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    atom.config.observe('directory-color.focusColor',function(value){
        let colorN = value
        let colorNT = `rgb(${colorN._red},${colorN._green},${colorN._blue})`
        console.log('paso por la function value:'+colorNT);
        var styleElement = document.createElement("style");
        styleElement.setAttribute("id","focus-color")
        console.log($('#focus-color').length);
        if($('#focus-color').length == 0){
          document.getElementsByTagName("head")[0].append(styleElement);
        }
        $('#focus-color').text(".tree-view .selected:before{border-left:7px solid "+colorNT+" !important;color:#fff;opacity:1 !important;background:rgba("+colorN._red+","+colorN._green+","+colorN._blue+",.1)}.tree-view .directory::before,.tree-view .file::before {transition:all .3s ease;border-left:0px solid "+colorNT+";color:#fff;opacity:0}")
      })
      // atom.config.observe('directory-color.HoverColor',function(value){
      //     let colorN = value
      //     let colorNT = `rgb(${colorN._red},${colorN._green},${colorN._blue})`
      //     console.log('paso por la function value:'+colorNT);
      //     var styleElement = document.createElement("style");
      //     styleElement.setAttribute("id","hover-color")
      //     console.log($('#hover-color').length);
      //     if($('#hover-color').length == 0){
      //       document.getElementsByTagName("head")[0].append(styleElement);
      //     }
      //     $('#hover-color').text(".directory.list-item:hover::before{left:0px !important;top:0px !important;content:'' !important;position:absolute !important;height:25px !important;background:"+colorNT+" !important;color:#fff !important;opacity:1 !important}")
      //   })
  },

  deactivate() {
    $('#focus-color').remove()
    // $('#hover-color').remove()
  },

  serialize() {
  }
};
