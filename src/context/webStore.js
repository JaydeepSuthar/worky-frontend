import { create } from "zustand";

const webStore = (set) => ({
    openSidenav: false,
    isLogin: true,
    modal: false,
    setOpenSidenav: (value) => {
        set((state) => ({
            openSidenav: !state.openSidenav,
        }));
    },
    setIsLogin: () => {
        set((state) => ({
            isLogin: !state.isLogin,
        }));
    },
    setModal: () => {
        set((state) => ({
            modal: !state.modal,
        }));
    },
});

const useWebStore = create(webStore);

export default useWebStore;
