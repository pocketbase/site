package landing

import (
	"embed"

	"github.com/pocketbase/pocketbase/apis"
)

//go:embed all:build
var buildDir embed.FS

// BuildDirFS contains the embedded build directory files (without the "build" prefix)
var BuildDirFS = apis.MustSubFS(buildDir, "build")
