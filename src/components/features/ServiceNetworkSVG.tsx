'use client';

import React, { useState, useMemo } from 'react';
import {
    Headset, RefreshCw, Star, TrendingUp, 
    Megaphone, BarChartHorizontal, ArrowRight
} from 'lucide-react';
import { useMediaQuery } from '../../hooks/use-media-query';

// --- Configuration ---
const ICON_SIZE_DESKTOP = 20;
const NODE_RADIUS_DESKTOP = 35; 
const CENTRAL_NODE_RADIUS_DESKTOP = 45;
const SPREAD_RADIUS_FACTOR_DESKTOP = 3.0; 
const LABEL_FONT_SIZE_DESKTOP = 11;
const NUMBER_FONT_SIZE_DESKTOP = 10;
const VIEWBOX_WIDTH = 600;
const VIEWBOX_HEIGHT_DESKTOP = 550;

const ICON_SIZE_MOBILE = 16;
const NODE_RADIUS_MOBILE = 30;
const CENTRAL_NODE_RADIUS_MOBILE = 40;
const SPREAD_RADIUS_FACTOR_MOBILE = 2.8; // Tighter spread on mobile
const LABEL_FONT_SIZE_MOBILE = 9;
const NUMBER_FONT_SIZE_MOBILE = 8;
const VIEWBOX_HEIGHT_MOBILE = 600; // Taller viewBox for mobile labels

const STROKE_WIDTH_BASE = 1.5;
const STROKE_WIDTH_HIGHLIGHT = 3.0;
const LINE_OPACITY_BASE = 0.2; 
const LINE_OPACITY_HIGHLIGHT = 0.9;
const TEXT_COLOR = '#FFFFFF';
const LABEL_COLOR = '#99999A'; 
const TOOLTIP_BG_COLOR = '#1A1B1F'; 
const PANEL_BG_COLOR = '#22232A'; 

const nodesData = [
    // Using distinct colors again
    { 
        id: 0, name: "AI Reviews & Referrals", color: '#FF8C00', icon: Star, 
        description: "Automate review requests and referral programs.", 
        flowNumber: 1 
    },
    { 
        id: 1, name: "AI Website Lead Nurture", color: '#9370DB', icon: TrendingUp, 
        description: "Engage visitors and guide leads through your funnel.", 
        flowNumber: 2 
    }, 
    { 
        id: 2, name: "Lead Gen (Paid Ads)", color: '#FF69B4', icon: Megaphone, 
        description: "Optimize ad campaigns and capture qualified leads.", 
        flowNumber: 3 
    }, 
    { 
        id: 3, name: "Sales Coaching", color: '#20B2AA', icon: BarChartHorizontal, 
        description: "Analyze sales calls and provide coaching insights.", 
        flowNumber: 4 
    }, 
    { 
        id: 4, name: "AI Receptionist", color: '#FFD700', icon: Headset, 
        description: "Handle inquiries and schedule appointments 24/7.", 
        flowNumber: 5 
    }, 
    { 
        id: 5, name: "AI Reengagement Campaigns", color: '#1E90FF', icon: RefreshCw, 
        description: "Reactivate dormant leads and past clients automatically.", 
        flowNumber: 6 
    }, 
];

const nodeConnections: { [key: number]: number[] } = {
    '-1': [0, 1, 2, 3, 4, 5], 
    0: [-1, 1],
    1: [-1, 0, 2],
    2: [-1, 1, 5],
    3: [-1, 4],
    4: [-1, 3, 5],
    5: [-1, 2, 4]
};
const outerNodeConnectionsIndices = [ 
    [0, 1], [1, 2], [2, 5], [3, 4], [4, 5],
];

interface Point { x: number; y: number; }

export function ServiceNetworkSVG() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null); 
    const [tooltip, setTooltip] = useState<{ x: number; y: number; desc: string } | null>(null);

    const isMobile = useMediaQuery('(max-width: 768px)');

    // Select config based on screen size
    const ICON_SIZE = isMobile ? ICON_SIZE_MOBILE : ICON_SIZE_DESKTOP;
    const NODE_RADIUS = isMobile ? NODE_RADIUS_MOBILE : NODE_RADIUS_DESKTOP;
    const CENTRAL_NODE_RADIUS = isMobile ? CENTRAL_NODE_RADIUS_MOBILE : CENTRAL_NODE_RADIUS_DESKTOP;
    const SPREAD_RADIUS_FACTOR = isMobile ? SPREAD_RADIUS_FACTOR_MOBILE : SPREAD_RADIUS_FACTOR_DESKTOP;
    const LABEL_FONT_SIZE = isMobile ? LABEL_FONT_SIZE_MOBILE : LABEL_FONT_SIZE_DESKTOP;
    const NUMBER_FONT_SIZE = isMobile ? NUMBER_FONT_SIZE_MOBILE : NUMBER_FONT_SIZE_DESKTOP;
    const VIEWBOX_HEIGHT = isMobile ? VIEWBOX_HEIGHT_MOBILE : VIEWBOX_HEIGHT_DESKTOP;

    // Calculate layout based on dynamic config
    const width = VIEWBOX_WIDTH;
    const height = VIEWBOX_HEIGHT;
    const centerX = width / 2;
    const centerY = height / 2;
    const spreadRadius = Math.min(centerX, centerY - (NODE_RADIUS + LABEL_FONT_SIZE + 10)) / SPREAD_RADIUS_FACTOR * 2.8; // Ensure radius accounts for labels

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
        const nodePos = index === -1 ? centralPosition : nodePositions[index];
        const description = index === -1 ? "Central Hub: Integrating all services." : nodesData[index].description;
        setTooltip({
            x: nodePos.x,
            y: nodePos.y - (index === -1 ? CENTRAL_NODE_RADIUS : NODE_RADIUS) - 10, 
            desc: description
        });
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setTooltip(null);
    };

    const handleClick = (index: number) => {
        setSelectedIndex(index);
    };

    const handleNextStep = () => {
        // Implementation of handleNextStep
    };

    const handleShowOverview = () => {
        // Implementation of handleShowOverview
    };

    const nodePositions = useMemo<Point[]>(() => {
        return nodesData.map((_, index) => {
            const angleOffset = -Math.PI / 6; // Start top-right
            const angle = angleOffset + (index / nodesData.length) * Math.PI * 2;
            return {
                x: centerX + Math.cos(angle) * spreadRadius,
                y: centerY + Math.sin(angle) * spreadRadius
            };
        });
    }, [centerX, centerY, spreadRadius]);

    const centralPosition: Point = { x: centerX, y: centerY };

    const isNodeHighlighted = (index: number): boolean => {
        if (hoveredIndex === null && selectedIndex === null) return false;
        const activeIndex = selectedIndex ?? hoveredIndex;
        if (activeIndex === -1) return true; 
        if (index === -1) return true; 
        return index === activeIndex || (activeIndex !== null && (nodeConnections[activeIndex]?.includes(index) ?? false));
    }

    const isLineHighlighted = (idx1: number, idx2: number | null = null): boolean => {
        const activeIndex = selectedIndex ?? hoveredIndex;
        if (activeIndex === null) return false;

        if (idx2 === null) {
            return activeIndex === -1 || activeIndex === idx1;
        } else {
            return activeIndex === idx1 || activeIndex === idx2;
        }
    };

    // --- Info Panel Content (Remains the same) ---
    const selectedNodeDetails = selectedIndex === -1 ? centralNodeData : (selectedIndex !== null ? nodesData[selectedIndex] : null);
    const infoPanelContent = selectedNodeDetails ? null : null;

    return (
        <div className="relative w-full aspect-[600/600] md:aspect-[600/550] max-w-3xl mx-auto">
            <div className="relative w-full h-full">
                <svg 
                    viewBox={`0 0 ${width} ${height}`} 
                    preserveAspectRatio="xMidYMid meet"
                    className="w-full h-full block"
                    style={{ overflow: 'visible' }} 
                >
                    <defs>
                        <linearGradient id="softwairGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#00FC61' }} />
                            <stop offset="100%" style={{ stopColor: '#248AFF' }} />
                        </linearGradient>
                        <filter id="nodeHighlightGlow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                         <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="1.5"/>
                            <feOffset dx="1" dy="1" result="offsetblur"/>
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.2"/>
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>

                    <g id="lines">
                        {nodePositions.map((pos, index) => {
                            const isHighlighted = isLineHighlighted(index);
                            return (
                                <line
                                    key={`line-center-${index}`}
                                    x1={centralPosition.x} y1={centralPosition.y}
                                    x2={pos.x} y2={pos.y}
                                    stroke={isHighlighted ? "url(#softwairGradient)" : "#00FF79"}
                                    strokeWidth={isHighlighted ? STROKE_WIDTH_HIGHLIGHT : STROKE_WIDTH_BASE}
                                    strokeOpacity={isHighlighted ? LINE_OPACITY_HIGHLIGHT : LINE_OPACITY_BASE}
                                    className="transition-all duration-300 ease-out"
                                />
                            );
                        })}
                        {outerNodeConnectionsIndices.map(([idx1, idx2], index) => {
                            const pos1 = nodePositions[idx1];
                            const pos2 = nodePositions[idx2];
                            const isHighlighted = isLineHighlighted(idx1, idx2);
                            return (
                                <line
                                    key={`line-outer-${index}`}
                                    x1={pos1.x} y1={pos1.y}
                                    x2={pos2.x} y2={pos2.y}
                                    stroke={isHighlighted ? "url(#softwairGradient)" : "#00FF79"}
                                    strokeWidth={isHighlighted ? STROKE_WIDTH_HIGHLIGHT : STROKE_WIDTH_BASE}
                                    strokeOpacity={isHighlighted ? LINE_OPACITY_HIGHLIGHT : LINE_OPACITY_BASE}
                                    className="transition-all duration-300 ease-out"
                                />
                            );
                        })}
                    </g>

                    <g id="nodes">
                        {nodePositions.map((pos, index) => {
                            const node = nodesData[index];
                            const isNodeHovered = hoveredIndex === index; 
                            const isNodeActive = isNodeHighlighted(index); 
                            const Icon = node.icon;
                            const labelYOffset = NODE_RADIUS + (isMobile ? 14 : 18); // Dynamic label offset
                            const numberYOffset = -NODE_RADIUS - (isMobile ? 8 : 10); 

                            return (
                                <g
                                    key={`node-group-${index}`}
                                    transform={`translate(${pos.x}, ${pos.y})`}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleClick(index)}
                                    className="cursor-pointer"
                                    style={{ filter: isNodeActive ? 'url(#nodeHighlightGlow)' : 'url(#dropShadow)' }} 
                                >
                                    <circle
                                        r={NODE_RADIUS}
                                        fill={node.color}
                                        stroke={isNodeHovered ? TEXT_COLOR : 'none'}
                                        strokeWidth={isNodeHovered ? 2 : 0}
                                        transform={`scale(${isNodeHovered ? 1.1 : 1})`} 
                                        className="transition-transform duration-200 ease-out"
                                    />
                                    <Icon
                                        x={-ICON_SIZE / 2} y={-ICON_SIZE / 2}
                                        width={ICON_SIZE} height={ICON_SIZE}
                                        color={TEXT_COLOR} strokeWidth={1.5}
                                        transform={`scale(${isNodeHovered ? 1.1 : 1})`} 
                                        className="transition-transform duration-200 ease-out"
                                    />
                                    <text
                                        textAnchor="middle"
                                        y={labelYOffset}
                                        fontSize={LABEL_FONT_SIZE}
                                        fill={LABEL_COLOR}
                                        className="pointer-events-none font-medium"
                                    >
                                        {node.name}
                                    </text>
                                    <text
                                        textAnchor="middle"
                                        y={numberYOffset}
                                        fontSize={NUMBER_FONT_SIZE}
                                        fill={TEXT_COLOR} 
                                        fontWeight="bold"
                                        className="pointer-events-none"
                                    >
                                        {node.flowNumber}
                                    </text>
                                </g>
                            );
                        })}

                        <g
                            transform={`translate(${centralPosition.x}, ${centralPosition.y})`}
                            onMouseEnter={() => handleMouseEnter(-1)}
                            onMouseLeave={handleMouseLeave}
                            className="cursor-pointer"
                            style={{ filter: isNodeHighlighted(-1) ? 'url(#nodeHighlightGlow)' : 'url(#dropShadow)' }}
                        >
                             <circle
                                r={CENTRAL_NODE_RADIUS}
                                fill="#121316"
                                stroke={"url(#softwairGradient)"} 
                                strokeWidth={3}
                                transform={`scale(${hoveredIndex === -1 ? 1.1 : 1})`}
                                className="transition-transform duration-200 ease-out"
                             />
                            <text
                                textAnchor="middle" dy=".3em"
                                fill="url(#softwairGradient)"
                                fontSize="16" fontWeight="bold"
                                transform={`scale(${hoveredIndex === -1 ? 1.1 : 1})`}
                                className="transition-transform duration-200 ease-out pointer-events-none"
                            >
                                Softwair
                            </text>
                        </g>
                    </g>
                </svg>

                {tooltip && (
                    <div
                        className="absolute pointer-events-none px-3 py-2 rounded text-sm shadow-lg whitespace-normal transition-opacity duration-200 max-w-[200px] text-center z-10"
                        style={{
                            left: `${tooltip.x}px`,
                            top: `${tooltip.y}px`,
                            transform: 'translate(-50%, -100%)', 
                            backgroundColor: TOOLTIP_BG_COLOR,
                            color: TEXT_COLOR,
                            border: `1px solid ${hoveredIndex === -1 ? '#00FF79' : nodesData[hoveredIndex!]?.color || '#00FF79'}`,
                            opacity: 1
                        }}
                    >
                        {tooltip.desc}
                    </div>
                )}
            </div>

            <div className={`mt-6 md:mt-8 p-4 md:p-6 rounded-lg border border-[#32333A] bg-[${PANEL_BG_COLOR}] text-left transition-all duration-300 ease-out`}>
                {infoPanelContent}
                <button onClick={handleShowOverview}> Show System Overview </button>
            </div>
        </div>
    );
} 