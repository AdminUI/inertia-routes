import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";

export function generateChangelogMenu() {
	const dir = resolve("./docs/changelogs");
	const files = readdirSync(dir)
		.filter((file) => file.endsWith(".md") && !file.endsWith("next.md"))
		.map((file) => {
			const version = file.replace(/^v/, "").replace(/.md$/, "");

			const fullPath = join(dir, file);
			const content = readFileSync(fullPath, "utf-8");

			const injected = `# Version ${version}\n\n`;
			writeFileSync(fullPath, injected + content);

			return {
				text: version,
				link: "/changelogs/" + file,
			};
		})
		.sort((a, b) => b.text.localeCompare(a.text, undefined, { numeric: true }))
		.slice(0, 20);
	return {
		text: "Current Version: " + files[0].text,
		items: files,
	};
}
