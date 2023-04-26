import lottie from "lottie-web"
import { defineElement } from "lord-icon-element"
import React from "react"
import { Player } from "@lottiefiles/react-lottie-player"
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation)
import styled from "styled-components"
import colored from "./colored"

const LordIconContainer = colored(styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    * {
        color: var(--color) !important;
        fill: var(--color) !important;
    }
`)

const LordIcon = ({
	name,
	isHovering,
	width = "20px",
	color,
}: {
	name: string
	isHovering?: boolean
	width?: string
	color?: string
}) => {
	if (isHovering === undefined) {
		return (
			<LordIconContainer color={color ?? "primary"}>
				<Player
					autoplay
					loop
					src={`/animation/${name}.json`}
					style={{
						width,
						height: width,
						color: color ?? "primary",
					}}
				/>
			</LordIconContainer>
		)
	}
	return (
		<LordIconContainer
			style={{
				marginBottom: "8px",
			}}
		>
			<Player
				autoplay
				loop
				src={`/animation/${name}.json`}
				className="tag-icon"
				style={{
					width,
					display: isHovering ? "block" : "none",
				}}
			/>
			<Player
				src={`/animation/${name}.json`}
				className="tag-icon"
				style={{
					width,
					display: isHovering ? "none" : "block",
				}}
			/>
		</LordIconContainer>
	)
}

export default LordIcon
