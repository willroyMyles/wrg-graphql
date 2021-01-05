import dayjs from "dayjs"

export const getCreateAt = (item:any) => {
    return dayjs(item["createdAt"]).fromNow()
}