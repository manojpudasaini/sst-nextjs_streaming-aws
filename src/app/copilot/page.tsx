export const dynamic = "force-dynamic";

import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";


export default function CopilotChatPage() {

    return <main className="grid place-items-center h-dvh">
        <p className="font-semibold text-4xl text-center">Look into the bottom right corner</p>
        <CopilotKit publicApiKey={process.env.COPILOT_API_KEY}>
            <CopilotPopup
                instructions={"You are assisting the user as best as you can. Answer in the best way possible given the data you have."}
                labels={{
                    title: "Copilot Popup Assistant",
                    initial: "Need any help? Feel free to ask",
                }}
            />
        </CopilotKit>
    </main>
}