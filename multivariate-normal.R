library(jsonlite)

dat <- read_json("sample.json", simplifyVector = TRUE)
dat2 <- data.frame(dat)

cor(dat2) |> print()
# plot(dat2)

