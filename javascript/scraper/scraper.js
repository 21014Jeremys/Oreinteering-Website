const axios = require("axios");
const cheerio = require("cheerio");

async function scrape_1() {
    try {
        const url = "https://www.orienteering.org.nz/events/";
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const events = [];

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

async function scrape_2() {
    try {
        const url = "https://www.orienteering.org.nz/";
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const news = [];

        $(".widget-odd.widget-last.widget-first.widget-1.home-recent-news.onz-homepage-column1 .rpwe-block .rpwe-ul li").each((i, el) => {
            const columns = $(el).find("a");
            
            const link = $(columns[0]).attr("href");
            const image = $(columns[0]).find("img").attr("src");

            const header = $(el).find("h3");
            const name = $(header[0]).find("a").text().trim();
            news.push({ name,link,image });
            
            const fs = require("fs");
            fs.writeFileSync("../../data/news.json", JSON.stringify(news,null,2), "utf-8");

        });
        console.log(news);
        /*console.log($.html().slice(0, 500));*/
    } catch (err) {
    console.error("Scrape failed:", err.message);
  }
}


scrape_1();
scrape_2();