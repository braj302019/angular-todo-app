import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import 'zone.js/dist/zone.js';

import "./reset.css";
import "./styles.css";

import "@angular/material/prebuilt-themes/purple-green.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";

platformBrowserDynamic().bootstrapModule(AppModule);
