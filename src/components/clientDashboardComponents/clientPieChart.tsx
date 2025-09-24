"use client";

import * as React from "react";

import { SquareCheck, Clock9, ArrowUpRight } from "lucide-react";

import { Label, Pie, PieChart } from "recharts";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Link } from "react-router-dom";

export const description = "A donut chart with text";

const chartData = [
    { projects: "completed", count: 10, fill: "var(--my-blue)" },
    { projects: "active", count: 4, fill: "var(--color-safari)" },
];

const chartConfig = {
    projects: {
        label: "Projects",
    },
    completed: {
        label: "Completed",
        color: "var(--chart-1)",
    },
    active: {
        label: "Active",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig;

export default function ChartPieDonutText() {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.count, 0);
    }, []);

    return (
        <Card className="flex flex-col gap-0 lg:min-w-[370px]">
            <CardHeader className="items-center pb-0 flex justify-between">
                <CardTitle>Projects</CardTitle>
                <Link to="#">
                    <ArrowUpRight />
                </Link>
            </CardHeader>

            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="count"
                            nameKey="projects"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Visitors
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>

            <CardFooter className="flex justify-between text-sm px-3">
                <div className="bg-[#F5F4F7] flex gap-2 p-3 items-center">
                    <SquareCheck className="fill-[var(--my-blue)] stroke-white" />
                    <div className="flex flex-col">
                        <span className="font-semibold sm:text-xl">
                            {chartData[0].count}
                        </span>
                        <span className="text-xs">Completed Projects</span>
                    </div>
                </div>

                <div className="bg-[#F5F4F7] flex gap-2 p-3 items-center">
                    <Clock9 className="stroke-[var(--my-blue)]" />
                    <div className="flex flex-col">
                        <span className="font-semibold sm:text-xl">
                            {chartData[1].count}
                        </span>
                        <span className="text-xs">Completed Projects</span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
