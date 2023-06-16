// @ts-ignore 
import tracker from '@middleware.io/agent-apm-nextjs';

export function register() {
    tracker.track({
        projectName: "turn-demo-dev-2",
        serviceName: "turn-demo-dev-2",
        accountKey: "tsxvgwovbtqqojghcmkvfwgscjzwdreopzed",
        target: "vercel",
    });

    tracker.info('ONE TIME INSTRUMENTATION DONE dev 2');
}