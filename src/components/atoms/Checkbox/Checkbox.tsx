import { Checkbox as BaseCheckbox } from "react-aria-components"
import { StyledCheckbox } from "./Checkbox.styled"

const Checkbox = (props: React.ComponentProps<typeof BaseCheckbox>) => {
	return (
		<StyledCheckbox {...props}>
			<div className="checkbox">
				<svg viewBox="0 0 18 18" aria-hidden="true">
					<polyline points="1 9 7 14 15 4" />
				</svg>
			</div>
		</StyledCheckbox>
	)
}

export default Checkbox
