const enable = () => {
	fetch(`/api/library_file_subscriptions/${App._state.editingFileKey}/H0LcCO1smJuohlD528oByhJb`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'X-Csrf-Bypass': 'yes'
		},
		credentials: 'include',
		body: JSON.stringify({ is_subscribed: true })
	});
};

figmaPlus.onFileLoaded(() => {
	if (
		Object.values(App._state.roles.byFileKey[App.editingFileKey()]).find(user => user.level === 999).user.id ===
			App._state.user.id &&
		!App._state.library.subscriptions.byFile[App._state.editingFileKey]['H0LcCO1smJuohlD528oByhJb']
	)
		enable();
});

figmaPlus.addCommand({ label: 'Enable Power Platform Library', action: enable });
