import create from "zustand"
import { persist } from "zustand/middleware"

export const useColorMeStore = create(
    persist(
        (set) => ({
            colorme: {
                background: "lightblue",
                color: "black",
            },
            setColorMe: (e) => set((state) =>
             ({ ...state, colorme: { ...state.colorme, [e.target.name]: e.target.value } })),
        }),
        {name: "colors", getStorage: () => localStorage}
    )
);