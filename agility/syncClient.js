import agilitySync from "@agility/constent-sync";
import sampleSyncConsoleInterface from "./store-interface-console";
const syncClient = agilitySync.getSyncClient({
  //your 'guid' from Agility CMS
  guid: "c4538317 - u",
  //your 'apiKey' from Agility CMS
  apiKey:
    "defaultpreview.86dcbe18b86a82493d6657c10098c45c70ed56251c8eb9de3aec3d4fd3b89544",
  //the language(s) of content you want to source
  languages: ["en-us"],
  //your channel(s) for the pages you want to source
  channels: ["website"],
  //your custom storage/access interface
  store: {
    //must be the interface used to store and access content
    interface: sampleSyncConsoleInterface,
    //any options/config that you want to pass along to your interface as an argument 'options'
    options: {},
  },
});
//start the sync process
syncClient.runSync();
