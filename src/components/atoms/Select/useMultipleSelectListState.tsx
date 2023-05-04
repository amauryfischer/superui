/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { CollectionStateBase, MultipleSelection } from "@react-types/shared"
import { Key, useMemo } from "react"
import { Node } from "@react-types/shared"
import { useControlledState } from "@react-stately/utils"
import { ListState } from "react-stately"
import { useListState } from "react-stately"
import { Selection } from "react-stately"

export interface MultipleSelectListProps<T>
	extends CollectionStateBase<T>,
		Omit<MultipleSelection, "disallowEmptySelection"> {
	/** Filter function to generate a filtered list of nodes. */
	filter?: (nodes: Iterable<Node<T>>) => Iterable<Node<T>>
	/** @private */
	suppressTextValueWarning?: boolean
}

export interface MultipleSelectListState<T> extends ListState<T> {
	readonly selectedKeys: "all" | Iterable<Key> | undefined

	setSelectedKeys(keys: "all" | Iterable<Key> | undefined): void

	readonly selectedItems: Node<T>[]
}

function useMultipleSelectListState<T extends object>(
	props: MultipleSelectListProps<T>,
): MultipleSelectListState<T> {
	let [selectedKeys, setSelectedKeys] = useControlledState<
		typeof props.selectedKeys
	>(
		props.selectedKeys,
		props.defaultSelectedKeys ?? undefined,
		props.onSelectionChange as any,
	)

	let { collection, disabledKeys, selectionManager } = useListState({
		...props,
		selectionMode: "multiple",
		disallowEmptySelection: true,
		allowDuplicateSelectionEvents: true,
		selectedKeys,
		onSelectionChange: (keys: any) => {
			const newKeys = [] as Key[]
			if (keys === "all") {
				setSelectedKeys("all")
				return
			}
			keys.forEach((key: any) => {
				newKeys.push(key)
			})
			setSelectedKeys(newKeys)
		},
	})

	let selectedItems = useMemo(() => {
		let items = [] as Node<T>[]
		if (!selectedKeys) {
			return items
		}
		for (let key of selectedKeys) {
			let item = collection.getItem(key)
			if (item) {
				items.push(item)
			}
		}
		return items
	}, [collection, selectedKeys])

	return {
		collection,
		disabledKeys,
		selectionManager,
		selectedKeys,
		setSelectedKeys,
		selectedItems,
	}
}

export default useMultipleSelectListState
