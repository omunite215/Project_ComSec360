import React from "react";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { InfoIcon } from "lucide-react";
import { CompanyInfoHoverContent } from "@/lib/constants";

export const CompanyNameHoverCard = () => {
	return (
		<HoverCard>
			<HoverCardTrigger>
				<InfoIcon size={20} />
			</HoverCardTrigger>
			<HoverCardContent>
				<ol className="space-y-3 list-[lower-alpha] *:leading-relaxed px-2 py-2">
					<li>{CompanyInfoHoverContent.name.first}</li>
					<li>{CompanyInfoHoverContent.name.second}</li>
				</ol>
			</HoverCardContent>
		</HoverCard>
	);
};

export const CompanyTypeHoverCard = () => {
	return (
		<HoverCard>
			<HoverCardTrigger>
				<InfoIcon size={20} />
			</HoverCardTrigger>
			<HoverCardContent className="leading-relaxed">
				{CompanyInfoHoverContent.type}
			</HoverCardContent>
		</HoverCard>
	);
};

export const CompanyAddressHoverCard = () => {
	return (
		<HoverCard>
			<HoverCardTrigger>
				<InfoIcon size={20} />
			</HoverCardTrigger>
			<HoverCardContent className="leading-relaxed">
				{CompanyInfoHoverContent.address}
			</HoverCardContent>
		</HoverCard>
	);
};

export const CompanyTimeHoverCard = () => {
	return (
		<HoverCard>
			<HoverCardTrigger>
				<InfoIcon size={20} />
			</HoverCardTrigger>
			<HoverCardContent className="leading-relaxed">
				{CompanyInfoHoverContent.time}
			</HoverCardContent>
		</HoverCard>
	);
};

export const CompanyPresentorHoverCard = () => {
	return (
		<HoverCard>
			<HoverCardTrigger>
				<InfoIcon size={20} />
			</HoverCardTrigger>
			<HoverCardContent className="font-normal leading-relaxed text-base">
				{CompanyInfoHoverContent.presentor}
			</HoverCardContent>
		</HoverCard>
	);
};
