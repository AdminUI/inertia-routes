interface ZiggyRoute {
	uri: string;
	methods: ("GET" | "HEAD" | "POST" | "PATCH" | "PUT" | "OPTIONS" | "DELETE")[];
	domain?: string;
	parameters?: string[];
	bindings?: Record<string, string>;
	wheres?: Record<string, unknown>;
	middleware?: string[];
}
type ZiggyRawParameterValue = string | number;
type ZiggyDefaultRoutable = { id: ZiggyRawParameterValue } & Record<keyof any, unknown>;
export type ZiggyParameterValue = ZiggyRawParameterValue | ZiggyDefaultRoutable;
export interface ZiggyConfig {
	url: string;
	port: number | null;
	defaults: Record<string, ZiggyRawParameterValue>;
	routes: Record<string, ZiggyRoute>;
	location?: {
		host?: string;
		pathname?: string;
		search?: string;
	};
}
