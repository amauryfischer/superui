enum IVariant {
	contained = "contained",
	outlined = "outlined",
	text = "text",
}
export type VariantProp = IVariant | keyof typeof IVariant
export default IVariant
