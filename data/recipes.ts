export interface Step {
    id: number;
    text: string;
    emoji: string;
    timerSeconds?: number;
    warning?: string;
}

export interface Recipe {
    id: string;
    name: string;
    steps: Step[];
}

export const recipes: Record<string, Recipe> = {
    cereal: {
        id: "cereal",
        name: "시리얼",
        steps: [
            {
                id: 1,
                text: "그릇과 숟가락을 준비해요!",
                emoji: "🥣",
            },
            {
                id: 2,
                text: "시리얼을 그릇에 담아요. (쏟지 않게 조심!)",
                emoji: "🥡",
            },
            {
                id: 3,
                text: "우유를 천천히 부어주세요.",
                emoji: "🥛",
            },
            {
                id: 4,
                text: "맛있게 냠냠 먹어요!",
                emoji: "😋",
            },
        ],
    },
    toast: {
        id: "toast",
        name: "토스트",
        steps: [
            {
                id: 1,
                text: "식빵을 토스트기에 쏙~ 넣어주세요.",
                emoji: "🍞",
            },
            {
                id: 2,
                text: "토스트기가 톡! 튀어오를 때까지 기다려요.",
                emoji: "⏰",
                timerSeconds: 5, // Demo duration, real would be longer but for kids app demo keep short
                warning: "뜨거우니 손을 넣으면 안돼요! 🔥",
            },
            {
                id: 3,
                text: "집게로 조심조심 빵을 꺼내요.",
                emoji: "🥢",
                warning: "뜨거우니 조심하세요!",
            },
            {
                id: 4,
                text: "잼을 쓱쓱 발라주세요.",
                emoji: "🍓",
            },
        ],
    },
    yogurt: {
        id: "yogurt",
        name: "요거트",
        steps: [
            {
                id: 1,
                text: "요거트 뚜껑을 조심조심 열어요.",
                emoji: "🥣",
            },
            {
                id: 2,
                text: "좋아하는 과일이나 견과류를 올려요.",
                emoji: "🍓",
            },
            {
                id: 3,
                text: "꿀을 한 바퀴 휘~ 둘러주세요.",
                emoji: "🍯",
            },
            {
                id: 4,
                text: "잘 섞어서 맛있게 먹어요!",
                emoji: "🥄",
            },
        ],
    },
};
