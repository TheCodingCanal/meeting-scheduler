// otel.ts
import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";

const traceExporter = new OTLPTraceExporter({
	url: "http://localhost:4318/v1/traces", // Replace with your OTLP endpoint
});

const sdk = new NodeSDK({
	traceExporter,
	instrumentations: [getNodeAutoInstrumentations()],
});

// Use async function to start OpenTelemetry SDK
const startSdk = async (): Promise<void> => {
	try {
		await sdk.start();
		console.log("OpenTelemetry SDK started");
	} catch (error) {
		console.error("Error starting OpenTelemetry SDK", error);
	}
};

// Call the startSdk function
startSdk();

// Define a shutdown function to handle process termination gracefully
const shutdown = async (): Promise<void> => {
	try {
		await sdk.shutdown();
		console.log("OpenTelemetry SDK shut down");
	} catch (error) {
		console.error("Error shutting down OpenTelemetry SDK", error);
	} finally {
		process.exit(0);
	}
};

// Listen for termination signals (SIGTERM and SIGINT)
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
