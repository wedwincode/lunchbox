export enum DaysOfWeek {
    monday = 'Понедельник',
    tuesday = 'Вторник',
    wednesday = 'Среда',
    thursday = 'Четверг',
    friday = 'Пятница',
    saturday = 'Суббота',
    sunday = 'Воскресенье'
}

export enum MealEnum {
    breakfast = 'breakfast',
    lunch = 'lunch',
    dinner = 'dinner'
}

export const MealLabels: Record<MealEnum, string> = {
    [MealEnum.breakfast]: 'Завтрак',
    [MealEnum.lunch]: 'Обед',
    [MealEnum.dinner]: 'Ужин'
}
