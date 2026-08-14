const axios = require("axios");
const cheerio = require("cheerio");

async function scrape() {
    try {
        const url = "https://www.orienteering.org.nz/events/";
        const { data } = await axios.get(url);
        const $ = cheerio.load(data)
        const events = []

        $(".events-table tr").each((i, el) => {
            const columns = $(el).find("td");

            if (columns.length > 0) {
                const date = $(columns[1]).text().trim();
                const name = $(columns[2]).find("a").first().text().trim();
                const link = $(columns[2]).find("a").attr("href");
                const location = $(columns[3]).text().trim();
                const club = $(columns[4]).text().trim();
                events.push({ date,name,link,location,club });
            
                const fs = require("fs");
                fs.writeFileSync("../../data/events.json", JSON.stringify(events,null,2), "utf-8");

            }
        });
        console.log(events);
        /*console.log($.html().slice(0, 500));*/
    } catch (err) {
    console.error("Scrape failed:", err.message);
  }
}

scrape();