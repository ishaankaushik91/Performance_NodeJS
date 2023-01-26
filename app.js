import {performance, PerformanceObserver} from "perf_hooks";
import axios from "axios";

async function LetsSee()
{
    try {

        let perfObserver = new PerformanceObserver((tasks) => {
            tasks.getEntries().forEach((task) => {
                console.log(task);
            })
        });

        perfObserver.observe({entryTypes : ['function'], buffer : true});

        performance.mark('call-start');
        await axios.get('https://jsonplaceholder.typicode.com/todos/');
        performance.mark('call-end');

        performance.measure('https://jsonplaceholder.typicode.com/todos/', 'call-start', 'call-end');

    } catch (error) {
        console.log(error);
    }
}
LetsSee();