let initialState = {
    contactList: [],  // 초기 연락처 목록
    filteredList: []  // 필터링된 연락처 목록
};

function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case "ADD_CONTACT":
            const updatedContactList = [...state.contactList, { name: payload.name, phoneNumber: payload.phoneNumber }];
            return {
                ...state,
                contactList: updatedContactList,
                filteredList: updatedContactList // 새로운 연락처 추가 시 필터된 목록도 업데이트
            };
        
        case "SEARCH_BY_USERNAME":
            const keyword = payload.keyword.toLowerCase();
            const filteredList = state.contactList.filter(contact =>
                contact.name.toLowerCase().includes(keyword)
            );
            return {
                ...state,
                filteredList  // 검색 결과를 상태로 업데이트
            };

        default:
            return state;
    }
}

export default reducer;