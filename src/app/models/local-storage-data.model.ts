export interface ILocalStorageData {
    week: Record<string, IDayData>
}

export interface IDayData {
    breakfast: string[]
    lunch: string[]
    dinner: string[]
}
