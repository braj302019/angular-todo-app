import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import 'zone.js/dist/zone.js';

import "./reset.css";

platformBrowserDynamic().bootstrapModule(AppModule);
