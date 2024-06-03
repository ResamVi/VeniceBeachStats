## Libraries

Ich brauche:
    - Einfache Beispiele zum Anfangen
    - Dokumentation+Beispiele zum Konfigurieren
    - Time Support
    - Annotations
    - Batteries Included
    - Freebies

Chart.js
https://www.chartjs.org/docs/latest/

Sehr detaillierte Library mit der man gut einsteigen kann aber
auch die meisten Konfigurations-Extrawürste erfüllen kann.
Mit großen Datenmengen lässt sich leicht arbeiten.

- (+) Einfache Beispiele zum Anfangen
    - Basics sind da

- (-) Dokumentation+Beispiele zum Konfigurieren
    - Naja. Schon da, aber bisschen schwer zu verdauen.

- (+) Time Support
    - Muss man sich mit einem Adapter konfigurieren 

- (+) Annotations
    - Gibt ein Plugin. Bissel nervig zu konfigurieren.

- (-) Batteries Included:
    - Annotations, Time Support brauchen alles Plugins.

- (+) Freebies
    - Mouse Hover, Responsiveness, Legende

- (-) Doofste Sachen
    - Die Dokumentation für detaillierte Konfiguration

Chartkick
https://chartkick.com/

Nichts ist so schnell wie das. Der Kandidat für einen schnellen Chart.

- (+++) Einfache Beispiele zum Anfangen:
    - Einfacher gehts nicht

- (+) Dokumentation+Beispiele zum Konfigurieren
    - Ist nicht sehr tiefgründig also nicht viel Dokumentation nötig.

- (-) Time Support
    - Muss man sich selber basteln

- (---) Annotations
    - Keine

- (+) Batteries Included:
    - Der ganze Sinn dahinter ist es nur eine Funktion aufrufen zu müssen

- (-) Freebies
    - Einfaches Auto-Refresh

- (-) Doofste Sachen
    - Eingeschränkter Umfang für Konfiguration


ApexCharts
https://apexcharts.com/

Das Schönste unter Allen. Elegante Konfiguration und Dokumentation. Der Kandidat für von sich aus gut aussehende Dashboards.
Nur mit großen Datenmengen war hier etwas schwierig zu arbeiten.

- (++) Einfache Beispiele zum Anfangen:
    - Einfacher gehts nicht

- (+++) Dokumentation+Beispiele zum Konfigurieren
    - Alle Konfigurationen haben Beispielwerte gesetzt zum besseren veranschaulichen

- (+++) Time Support
    - Eingebaut, solange Date.parse() damit funktioniert.

- (+++) Annotations
    - Batteries Included mit allem was man braucht (ranges, x und y Annotationen)

- (++) Freebies
    - Hover, Schönes Design, Zoom um näher Daten zu analysieren

- (-) Doofste Sachen
    - Column Chart hängt bei ~500 Daten schon krass. Muss man Line Charts nehmen
    - Man kann nicht einstellen wann man die Ticks haben will ("um 0:00 von jedem Tag"). Muss ein Hack mit y-Achsen Annotationen gemacht werden

Frappe Charts
https://github.com/frappe/charts

Sieht poliert aus, aber für tiefgründigeres ist es doch sehr nervig.

- (-) Einfache Beispiele zum Anfangen
    - Es gibt ein (*1*) Beispiel. Das wars. "Find den Rest selber raus aus unserer Doku. "

- (-) Dokumentation+Beispiele zum Konfigurieren
    - "Vorschau von den Einstellungen die wir erklären? Ne, gibs nicht"
    - Dokumentation zwar, aber eine ganzheitliche technische Referenzen zu allen Feldern gibts nicht und ist nur überall verteilt.

- (-) Annotations
    - Es gibt nur y-Achsen Annotationen (ich kriege die nichtmal zu laufen)

- (-) Time Support
    - Muss man sich sich selber basteln

- (---) Freebies
    - Seh' ich keine

- (-) Doofste Sachen
    - Die Dokumentation ist hauptsächlich Text für ein Thema was hauptsächlich bildlich ist. Man weiß nichtmal was man erwarten soll, wenn man meint die richtige Konfiguration gefunden zu haben

echarts
https://echarts.apache.org/en/index.html

Scheint der mächtigste Kandidat zu sein. Dokumentation navigieren ist etwas umständlicher weil die explanation-type Doku (Handbook) prägnant gehalten wurde aber die Referenz ("API") und 
Google für meine Ziele nötig waren.

- (++) Einfache Beispiele zum Anfang
    - Für jeden Chart-Typ ein Beispiel mit Variationen

- (+) Dokumentation+Beispiele zum Konfigurieren
    - Ganzes Sortiment an ausgefallenen Beispielen
    - Es gibt Beispiele zur Konfigurationen und Konzepten. Aber sehr spärlich.
    - Das Handbook stellt Konzepte vor aber nicht sehr ausfürlich (wie Visual Mapping funktioniert erarbeitete ich mir besser aus Beispielen.)

- (+++) Annotations
    - X und Y-Ranges sind da und angenehm zu benutzen

- (+) Time Support
    - Grundsätzlich da. Date Formatierung muss man nur selber basteln.

- (-) Freebies
    - Der Grundchart ist minimal gehalten. Man muss sich alles selber konfigurieren
    - Dafür ist die Auswahl groß

- (-) Doofste Sachen
    - Responsiveness ist kein Freebie: https://echarts.apache.org/handbook/en/concepts/chart-size#listen-to-the-container-size-to-change-the-chart-size
    - Kein Mouse Hover Freebie als Batterie beinhaltet
    - Fängt sehr spärlich an und muss von da an alles konfiguriert werden

chartist.js
https://gionkunz.github.io/chartist-js/

Kann drei Typen: Line Charts, Bar Charts, Pie Charts. Der Umfang ist sehr eingeschränkt dafür ist es elegant in dem was es kann.


- (++) Einfache Beispiele zum Anfang
    - Beispiele zu alle Varianten und den Code dazu daneben an dem man rumdocktern kann
    - Doof ist nur für die v0.11 ist es super ausführlich aber v1.x ist es noch WIP.

- (+++) Dokumentation+Beispiele zum Konfigurieren
    - Viel Optionen gibt es

- (+++) Time Support
    - Eingebaut und sehr elegant

- (---) Annotationen
    - Keine

- (-) Freebies
    - SVG Support
    - 10kB Dependency

- (-) Doofste Sachen
    - Erlaubt wirklich keine Extrawürste (Legende, Mouse Hover, Zoom)

Anmerkung des Verfassers:
Probiert man eine große Palette an Libraries merkt man wie die kleinen Dinge viel Ausmachen und die Developer Experience beeinträchtigen.
X macht es am Besten.
