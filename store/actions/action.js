export const moveScreen = () => {
	return { type: 'MOVE_SCREEN' }
}

export const recieveHandler = (handler) => {
	return { type: 'RECIEVE_HANDLER', handler }
}