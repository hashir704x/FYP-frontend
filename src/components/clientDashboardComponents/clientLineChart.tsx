import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A simple area chart";

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
];

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig;

export default function ClientLineChart() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
                <span className="text-[#9291A5] text-sm mt-1">Total Spendings</span>
                <h2 className="font-bold text-xl -mt-2">Rs. 50000</h2>
               
            </CardHeader>
            <CardContent className="p-0 ">
                <ChartContainer config={chartConfig} className="mt-[55px]">
                    <AreaChart
                   
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                       
                            dataKey="desktop"
                            type="natural"
                            fill="var(--my-blue)"
                            fillOpacity={0.5}
                            stroke="var(--my-blue)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
