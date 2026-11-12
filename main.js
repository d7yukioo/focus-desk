const {app, BrowserWindow, session} = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({width:1440,height:900,minWidth:1050,minHeight:680,backgroundColor:'#0b0d12',autoHideMenuBar:true,webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true}});
  win.loadFile('index.html');
  win.webContents.setWindowOpenHandler(()=>({action:'deny'}));
  win.webContents.on('will-navigate',(event)=>event.preventDefault());
}
app.whenReady().then(()=>{session.defaultSession.setPermissionRequestHandler((_webContents,_permission,callback)=>callback(false));createWindow();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow()})});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
