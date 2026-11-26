# vite

> 1621 JavaScript and TypeScript, 397 JSON, 207 CSS, 29 SCSS, 11 Less, 80 Markdown, 3 YAML, 158 HTML files, formatted by 10 formatters. `prettier@3.9.10` prints exactly what `prettier@3.10.1` prints in every language it formats.

| | |
|---|---|
| **Machine** | Apple M4 Max, 16 cores, 48 GiB |
| **System** | macOS 27.0.1 (26A434), Node v26.0.0, local machine |
| **When** | 2026-11-26 00:53 UTC, 3 min |
| **Method** | check mode, median of 7 rounds after one warm-up per language; order rotated every round |
| **Reference** | `prettier@3.10.1`, with Prettier's default style written out |
| **Run** | `2026-11-26-0053-apple-m4-max-darwin-vite` |

## JavaScript and TypeScript

1621 files, 3.1 MiB; 2 files left out because `prettier@3.10.1` cannot format them (run.json).

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 1621 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 1621 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 1619 (99.9%) | 2 | 0 | ⚠️ differs |
| `tidy@2.0.0` | 1619 (99.9%) | 2 | 0 | ⚠️ differs |
| `oxfmt@0.78.0` | 1599 (98.6%) | 22 | 0 | ⚠️ differs |
| `oxfmt@0.79.0` | 1599 (98.6%) | 22 | 0 | ⚠️ differs |
| `biome@2.6.7` | 1560 (96.2%) | 61 | 1 | ⚠️ differs |
| `biome@2.6.8` | 1560 (96.2%) | 61 | 1 | ⚠️ differs |
| `dprint@0.64.3` | 1213 (74.8%) | 408 | 0 | ⚠️ differs |
| `dprint@0.65.0` | 1213 (74.8%) | 408 | 0 | ⚠️ differs |

**Speed, as shipped** (check mode over all 1621 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.031 s** | 0.030 to 0.056 | 81.9× | 0.230 s | 26 MiB |
| `bun@1.4.4` | **0.052 s** | 0.051 to 0.055 | 48.9× | 0.550 s | 56 MiB |
| `dprint@0.64.3` | **0.060 s** | 0.059 to 0.065 | 42.6× | 0.620 s | 116 MiB |
| `dprint@0.65.0` | **0.061 s** | 0.060 to 0.069 | 41.9× | 0.620 s | 118 MiB |
| `biome@2.6.7` | **0.069 s** | 0.069 to 0.094 | 36.7× | 0.710 s | 111 MiB |
| `biome@2.6.8` | **0.070 s** | 0.069 to 0.100 | 36.2× | 0.710 s | 111 MiB |
| `oxfmt@0.79.0` | **0.074 s** | 0.072 to 0.075 | 34.5× | 0.590 s | 107 MiB |
| `oxfmt@0.78.0` | **0.074 s** | 0.071 to 0.081 | 34.4× | 0.580 s | 107 MiB |
| `prettier@3.9.10` | **2.51 s** | 2.43 to 2.80 | 1.0× | 5.12 s | 372 MiB |
| `prettier@3.10.1` | **2.54 s** | 2.42 to 2.92 | 1.0× | 5.17 s | 372 MiB |

**Speed, 1 thread** (check mode over all 1621 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `bun@1.4.4` | **0.096 s** | 0.091 to 0.118 | 26.5× | 0.090 s | 17 MiB |
| `tidy@2.0.0` | **0.105 s** | 0.102 to 0.114 | 24.3× | 0.090 s | 12 MiB |
| `oxfmt@0.79.0` | **0.123 s** | 0.122 to 0.126 | 20.8× | 0.130 s | 71 MiB |
| `oxfmt@0.78.0` | **0.125 s** | 0.123 to 0.133 | 20.3× | 0.130 s | 71 MiB |
| `dprint@0.65.0` | **0.425 s** | 0.419 to 0.455 | 6.0× | 0.480 s | 48 MiB |
| `dprint@0.64.3` | **0.428 s** | 0.415 to 0.472 | 5.9× | 0.480 s | 47 MiB |

## JSON

397 files, 107 KiB; 1 files left out because `prettier@3.10.1` cannot format them (run.json).

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 397 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 397 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 397 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 397 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 397 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 397 (100.0%) | 0 | 0 | ✅ identical |
| `biome@2.6.7` | 396 (99.7%) | 1 | 0 | ⚠️ differs |
| `biome@2.6.8` | 396 (99.7%) | 1 | 0 | ⚠️ differs |
| `dprint@0.64.3` | 134 (33.8%) | 263 | 0 | ⚠️ differs |
| `dprint@0.65.0` | 134 (33.8%) | 263 | 0 | ⚠️ differs |

**Speed, as shipped** (check mode over all 397 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.012 s** | 0.011 to 0.013 | 20.4× | 0.040 s | 6 MiB |
| `dprint@0.64.3` | **0.019 s** | 0.019 to 0.021 | 12.6× | 0.100 s | 34 MiB |
| `dprint@0.65.0` | **0.020 s** | 0.019 to 0.023 | 12.2× | 0.090 s | 35 MiB |
| `bun@1.4.4` | **0.020 s** | 0.020 to 0.022 | 12.0× | 0.150 s | 21 MiB |
| `biome@2.6.8` | **0.024 s** | 0.024 to 0.025 | 10.0× | 0.180 s | 35 MiB |
| `biome@2.6.7` | **0.025 s** | 0.024 to 0.026 | 9.8× | 0.180 s | 35 MiB |
| `oxfmt@0.79.0` | **0.048 s** | 0.047 to 0.052 | 5.1× | 0.220 s | 74 MiB |
| `oxfmt@0.78.0` | **0.049 s** | 0.047 to 0.053 | 4.9× | 0.220 s | 74 MiB |
| `prettier@3.10.1` | **0.243 s** | 0.239 to 0.260 | 1.0× | 0.350 s | 146 MiB |
| `prettier@3.9.10` | **0.245 s** | 0.242 to 0.248 | 1.0× | 0.350 s | 147 MiB |

**Speed, 1 thread** (check mode over all 397 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.016 s** | 0.016 to 0.019 | 14.8× | 0.010 s | 4 MiB |
| `bun@1.4.4` | **0.018 s** | 0.017 to 0.021 | 13.6× | 0.010 s | 8 MiB |
| `dprint@0.64.3` | **0.037 s** | 0.035 to 0.041 | 6.5× | 0.060 s | 31 MiB |
| `dprint@0.65.0` | **0.037 s** | 0.036 to 0.043 | 6.5× | 0.060 s | 32 MiB |
| `oxfmt@0.78.0` | **0.039 s** | 0.038 to 0.045 | 6.3× | 0.030 s | 63 MiB |
| `oxfmt@0.79.0` | **0.039 s** | 0.037 to 0.048 | 6.3× | 0.030 s | 63 MiB |

## CSS

207 files, 98 KiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 207 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 207 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 207 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 207 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 192 (92.8%) | 15 | 8 | ⚠️ differs |
| `tidy@2.0.0` | 192 (92.8%) | 15 | 8 | ⚠️ differs |
| `biome@2.6.7` | 191 (92.3%) | 16 | 1 | ⚠️ differs |
| `biome@2.6.8` | 191 (92.3%) | 16 | 1 | ⚠️ differs |
| `dprint@0.64.3` | 188 (90.8%) | 19 | 0 | ⚠️ differs |
| `dprint@0.65.0` | 188 (90.8%) | 19 | 0 | ⚠️ differs |

**Speed, as shipped** (check mode over all 207 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.009 s** | 0.008 to 0.009 | 31.5× | 0.020 s | 6 MiB |
| `bun@1.4.4` | **0.013 s** | 0.012 to 0.013 | 21.6× | 0.060 s | 23 MiB |
| `dprint@0.64.3` | **0.015 s** | 0.014 to 0.025 | 18.3× | 0.050 s | 36 MiB |
| `dprint@0.65.0` | **0.015 s** | 0.015 to 0.017 | 17.9× | 0.050 s | 37 MiB |
| `biome@2.6.7` | **0.018 s** | 0.017 to 0.019 | 15.4× | 0.090 s | 41 MiB |
| `biome@2.6.8` | **0.018 s** | 0.017 to 0.018 | 15.4× | 0.090 s | 41 MiB |
| `oxfmt@0.79.0` | **0.039 s** | 0.038 to 0.042 | 6.9× | 0.090 s | 76 MiB |
| `oxfmt@0.78.0` | **0.040 s** | 0.039 to 0.042 | 6.7× | 0.090 s | 76 MiB |
| `prettier@3.10.1` | **0.270 s** | 0.266 to 0.292 | 1.0× | 0.440 s | 136 MiB |
| `prettier@3.9.10` | **0.272 s** | 0.261 to 0.284 | 1.0× | 0.440 s | 137 MiB |

**Speed, 1 thread** (check mode over all 207 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.011 s** | 0.011 to 0.012 | 24.0× | 0.000 s | 5 MiB |
| `bun@1.4.4` | **0.013 s** | 0.012 to 0.014 | 20.8× | 0.000 s | 8 MiB |
| `dprint@0.65.0` | **0.025 s** | 0.024 to 0.028 | 10.8× | 0.030 s | 32 MiB |
| `dprint@0.64.3` | **0.026 s** | 0.023 to 0.026 | 10.5× | 0.030 s | 31 MiB |
| `oxfmt@0.79.0` | **0.038 s** | 0.036 to 0.045 | 7.1× | 0.030 s | 64 MiB |
| `oxfmt@0.78.0` | **0.039 s** | 0.037 to 0.041 | 7.0× | 0.030 s | 64 MiB |

## SCSS

29 files, 3 KiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 29 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 29 (100.0%) | 0 | 0 | ✅ identical |
| `dprint@0.64.3` | 29 (100.0%) | 0 | 0 | ✅ identical |
| `dprint@0.65.0` | 29 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 29 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 29 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 29 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 29 (100.0%) | 0 | 0 | ✅ identical |
| `biome@2.6.7` | 28 (96.6%) | 1 | 1 | ⚠️ differs |
| `biome@2.6.8` | 28 (96.6%) | 1 | 1 | ⚠️ differs |

**Speed, as shipped** (check mode over all 29 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.006 s** | 0.005 to 0.006 | 14.4× | 0.010 s | 5 MiB |
| `bun@1.4.4` | **0.008 s** | 0.007 to 0.008 | 10.8× | 0.000 s | 13 MiB |
| `biome@2.6.8` | **0.011 s** | 0.011 to 0.012 | 7.4× | 0.010 s | 33 MiB |
| `biome@2.6.7` | **0.011 s** | 0.011 to 0.012 | 7.2× | 0.010 s | 33 MiB |
| `dprint@0.65.0` | **0.012 s** | 0.011 to 0.013 | 7.1× | 0.030 s | 34 MiB |
| `dprint@0.64.3` | **0.012 s** | 0.010 to 0.012 | 7.0× | 0.020 s | 33 MiB |
| `oxfmt@0.78.0` | **0.036 s** | 0.035 to 0.038 | 2.3× | 0.030 s | 68 MiB |
| `oxfmt@0.79.0` | **0.036 s** | 0.035 to 0.038 | 2.3× | 0.030 s | 68 MiB |
| `prettier@3.10.1` | **0.082 s** | 0.078 to 0.095 | 1.0× | 0.100 s | 86 MiB |
| `prettier@3.9.10` | **0.083 s** | 0.081 to 0.093 | 1.0× | 0.100 s | 86 MiB |

**Speed, 1 thread** (check mode over all 29 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.006 | 15.4× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.018 | 11.2× | 0.000 s | 8 MiB |
| `dprint@0.64.3` | **0.012 s** | 0.011 to 0.012 | 7.1× | 0.010 s | 30 MiB |
| `dprint@0.65.0` | **0.012 s** | 0.011 to 0.012 | 6.8× | 0.010 s | 31 MiB |
| `oxfmt@0.79.0` | **0.033 s** | 0.031 to 0.035 | 2.5× | 0.020 s | 63 MiB |
| `oxfmt@0.78.0` | **0.034 s** | 0.031 to 0.044 | 2.4× | 0.020 s | 63 MiB |

## Less

11 files, 2 KiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 11 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 11 (100.0%) | 0 | 0 | ✅ identical |
| `dprint@0.64.3` | 11 (100.0%) | 0 | 0 | ✅ identical |
| `dprint@0.65.0` | 11 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 11 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 11 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 11 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 11 (100.0%) | 0 | 0 | ✅ identical |

**Speed, as shipped** (check mode over all 11 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.006 | 13.3× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.008 | 9.6× | 0.000 s | 11 MiB |
| `dprint@0.64.3` | **0.011 s** | 0.010 to 0.011 | 6.6× | 0.010 s | 31 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.011 to 0.012 | 6.4× | 0.010 s | 32 MiB |
| `oxfmt@0.79.0` | **0.036 s** | 0.035 to 0.038 | 1.9× | 0.030 s | 68 MiB |
| `oxfmt@0.78.0` | **0.037 s** | 0.034 to 0.039 | 1.9× | 0.030 s | 67 MiB |
| `prettier@3.10.1` | **0.071 s** | 0.066 to 0.073 | 1.0× | 0.080 s | 78 MiB |
| `prettier@3.9.10` | **0.072 s** | 0.069 to 0.076 | 1.0× | 0.080 s | 77 MiB |

**Speed, 1 thread** (check mode over all 11 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.004 to 0.005 | 15.1× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.006 s** | 0.006 to 0.007 | 11.2× | 0.000 s | 7 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.009 to 0.012 | 6.8× | 0.010 s | 29 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.010 to 0.013 | 6.5× | 0.000 s | 30 MiB |
| `oxfmt@0.78.0` | **0.032 s** | 0.031 to 0.036 | 2.2× | 0.020 s | 63 MiB |
| `oxfmt@0.79.0` | **0.033 s** | 0.031 to 0.036 | 2.2× | 0.020 s | 63 MiB |

## Markdown

80 files, 1.2 MiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 80 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 80 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 80 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 80 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 75 (93.8%) | 5 | 0 | ⚠️ differs |
| `oxfmt@0.79.0` | 75 (93.8%) | 5 | 0 | ⚠️ differs |
| `dprint@0.64.3` | 60 (75.0%) | 20 | 0 | ⚠️ differs |
| `dprint@0.65.0` | 60 (75.0%) | 20 | 0 | ⚠️ differs |
| `biome@2.6.7` | 48 (60.0%) | 32 | 1 | ⚠️ differs |
| `biome@2.6.8` | 48 (60.0%) | 32 | 1 | ⚠️ differs |

**Speed, as shipped** (check mode over all 80 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.010 s** | 0.010 to 0.011 | 118.6× | 0.050 s | 15 MiB |
| `bun@1.4.4` | **0.013 s** | 0.012 to 0.014 | 94.0× | 0.030 s | 53 MiB |
| `dprint@0.64.3` | **0.021 s** | 0.019 to 0.021 | 57.0× | 0.100 s | 60 MiB |
| `dprint@0.65.0` | **0.021 s** | 0.020 to 0.023 | 56.3× | 0.100 s | 61 MiB |
| `biome@2.6.8` | **0.033 s** | 0.032 to 0.035 | 36.2× | 0.100 s | 70 MiB |
| `biome@2.6.7` | **0.033 s** | 0.032 to 0.034 | 36.0× | 0.100 s | 70 MiB |
| `oxfmt@0.78.0` | **0.039 s** | 0.038 to 0.045 | 30.3× | 0.050 s | 98 MiB |
| `oxfmt@0.79.0` | **0.039 s** | 0.038 to 0.045 | 30.2× | 0.050 s | 98 MiB |
| `prettier@3.10.1` | **1.19 s** | 1.18 to 1.21 | 1.0× | 2.25 s | 358 MiB |
| `prettier@3.9.10` | **1.22 s** | 1.21 to 1.26 | 1.0× | 2.24 s | 350 MiB |

**Speed, 1 thread** (check mode over all 80 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.017 s** | 0.017 to 0.019 | 69.7× | 0.010 s | 10 MiB |
| `bun@1.4.4` | **0.023 s** | 0.023 to 0.026 | 51.8× | 0.010 s | 23 MiB |
| `oxfmt@0.79.0` | **0.052 s** | 0.051 to 0.059 | 22.8× | 0.050 s | 72 MiB |
| `oxfmt@0.78.0` | **0.053 s** | 0.052 to 0.059 | 22.5× | 0.050 s | 72 MiB |
| `dprint@0.64.3` | **0.064 s** | 0.063 to 0.067 | 18.6× | 0.060 s | 39 MiB |
| `dprint@0.65.0` | **0.064 s** | 0.063 to 0.065 | 18.5× | 0.060 s | 40 MiB |

## YAML

3 files, 3 KiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 3 (100.0%) | 0 | 0 | ✅ identical |
| `biome@2.6.7` | 2 (66.7%) | 1 | 0 | ⚠️ differs |
| `biome@2.6.8` | 2 (66.7%) | 1 | 0 | ⚠️ differs |
| `dprint@0.64.3` | 2 (66.7%) | 1 | 0 | ⚠️ differs |
| `dprint@0.65.0` | 2 (66.7%) | 1 | 0 | ⚠️ differs |

**Speed, as shipped** (check mode over all 3 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.005 | 13.0× | 0.000 s | 5 MiB |
| `bun@1.4.4` | **0.007 s** | 0.006 to 0.008 | 9.5× | 0.000 s | 9 MiB |
| `biome@2.6.8` | **0.010 s** | 0.010 to 0.011 | 6.4× | 0.000 s | 28 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.010 to 0.023 | 6.3× | 0.010 s | 30 MiB |
| `biome@2.6.7` | **0.010 s** | 0.010 to 0.011 | 6.2× | 0.000 s | 28 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.010 to 0.011 | 6.0× | 0.010 s | 31 MiB |
| `oxfmt@0.78.0` | **0.035 s** | 0.033 to 0.040 | 1.8× | 0.030 s | 66 MiB |
| `oxfmt@0.79.0` | **0.037 s** | 0.034 to 0.042 | 1.8× | 0.030 s | 66 MiB |
| `prettier@3.9.10` | **0.063 s** | 0.060 to 0.071 | 1.0× | 0.060 s | 77 MiB |
| `prettier@3.10.1` | **0.065 s** | 0.061 to 0.072 | 1.0× | 0.060 s | 76 MiB |

**Speed, 1 thread** (check mode over all 3 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.004 to 0.005 | 13.9× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.006 s** | 0.006 to 0.007 | 10.2× | 0.000 s | 7 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.009 to 0.011 | 6.2× | 0.010 s | 29 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.010 to 0.011 | 6.1× | 0.000 s | 30 MiB |
| `oxfmt@0.78.0` | **0.032 s** | 0.031 to 0.035 | 2.0× | 0.020 s | 62 MiB |
| `oxfmt@0.79.0` | **0.033 s** | 0.030 to 0.034 | 1.9× | 0.020 s | 62 MiB |

## HTML

158 files, 149 KiB; 4 files left out because `prettier@3.10.1` cannot format them (run.json).

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 158 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 158 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 158 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 158 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 158 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 157 (99.4%) | 1 | 0 | ⚠️ differs |
| `dprint@0.64.3` | 73 (46.2%) | 85 | 0 | ⚠️ differs |
| `dprint@0.65.0` | 73 (46.2%) | 85 | 0 | ⚠️ differs |
| `biome@2.6.7` | 58 (36.7%) | 100 | 0 | ⚠️ differs |
| `biome@2.6.8` | 58 (36.7%) | 100 | 0 | ⚠️ differs |

**Speed, as shipped** (check mode over all 158 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.009 s** | 0.008 to 0.011 | 40.7× | 0.030 s | 11 MiB |
| `bun@1.4.4` | **0.014 s** | 0.012 to 0.014 | 26.1× | 0.050 s | 37 MiB |
| `biome@2.6.8` | **0.019 s** | 0.018 to 0.019 | 18.9× | 0.080 s | 45 MiB |
| `dprint@0.64.3` | **0.019 s** | 0.017 to 0.020 | 18.1× | 0.080 s | 40 MiB |
| `biome@2.6.7` | **0.020 s** | 0.018 to 0.027 | 17.8× | 0.080 s | 45 MiB |
| `dprint@0.65.0` | **0.020 s** | 0.018 to 0.035 | 17.8× | 0.070 s | 42 MiB |
| `oxfmt@0.78.0` | **0.042 s** | 0.041 to 0.044 | 8.4× | 0.090 s | 79 MiB |
| `oxfmt@0.79.0` | **0.043 s** | 0.039 to 0.048 | 8.1× | 0.080 s | 79 MiB |
| `prettier@3.10.1` | **0.353 s** | 0.334 to 0.386 | 1.0× | 0.650 s | 164 MiB |
| `prettier@3.9.10` | **0.362 s** | 0.336 to 0.415 | 1.0× | 0.630 s | 168 MiB |

**Speed, 1 thread** (check mode over all 158 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.014 s** | 0.013 to 0.015 | 25.6× | 0.000 s | 8 MiB |
| `bun@1.4.4` | **0.014 s** | 0.014 to 0.016 | 24.9× | 0.000 s | 13 MiB |
| `dprint@0.65.0` | **0.034 s** | 0.033 to 0.036 | 10.3× | 0.040 s | 33 MiB |
| `dprint@0.64.3` | **0.034 s** | 0.032 to 0.036 | 10.3× | 0.040 s | 32 MiB |
| `oxfmt@0.79.0` | **0.038 s** | 0.036 to 0.042 | 9.2× | 0.030 s | 66 MiB |
| `oxfmt@0.78.0` | **0.039 s** | 0.038 to 0.040 | 9.1× | 0.030 s | 66 MiB |

## Formatters

| Formatter | Package | Languages | Default threads | Version output | Binary sha256 |
|---|---|---|---|---|---|
| prettier@3.10.1 | prettier@3.10.1 | js, json, css, scss, less, markdown, yaml, html, angular | 1 | 3.10.1 | 9fe2ddfe1e45b373 |
| biome@2.6.7 | @biomejs/biome@2.6.7 | js, json, css, scss, markdown, yaml, html, angular | per-core | Version: 2.6.7 | 5ea2cd7d212b1013 |
| biome@2.6.8 | @biomejs/biome@2.6.8 | js, json, css, scss, markdown, yaml, html, angular | per-core | Version: 2.6.8 | 16c2a522889a6797 |
| bun@1.4.4 | bun@1.4.4 | js, json, css, scss, less, markdown, yaml, html, angular | per-core | 1.4.4 | 0a2237cdcfa0d16e |
| dprint@0.64.3 | dprint@0.64.3, @dprint/typescript@0.101.0, @dprint/json@0.26.0, @dprint/markdown@0.29.0, dprint-plugin-malva@0.16.1, dprint-plugin-yaml@0.6.0, dprint-plugin-markup@0.28.0 | js, json, css, scss, less, markdown, yaml, html, angular | per-core | dprint 0.64.3 | de19b9ad9d2a70b5 |
| dprint@0.65.0 | dprint@0.65.0, @dprint/typescript@0.101.0, @dprint/json@0.26.0, @dprint/markdown@0.29.0, dprint-plugin-malva@0.16.1, dprint-plugin-yaml@0.6.0, dprint-plugin-markup@0.28.0 | js, json, css, scss, less, markdown, yaml, html, angular | per-core | dprint 0.65.0 | a0e191b7a7f7d62b |
| oxfmt@0.78.0 | oxfmt@0.78.0 | js, json, css, scss, less, markdown, yaml, html, angular | per-core | Version: 0.78.0 | ecab4e2f1bebaab1 |
| oxfmt@0.79.0 | oxfmt@0.79.0 | js, json, css, scss, less, markdown, yaml, html, angular | per-core | Version: 0.79.0 | ecab4e2f1bebaab1 |
| prettier@3.9.10 | prettier@3.9.10 | js, json, css, scss, less, markdown, yaml, html, angular | 1 | 3.9.10 | 6e922134a3c76fd4 |
| tidy@2.0.0 | lukeed/tidy release@2.0.0 (v2.0.0, published 2026-11-24, added before 7 days as a reviewed exception) | js, json, css, scss, less, markdown, yaml, html, angular | per-core | tidy 2.0.0 | 02f558417b51e06f |

## Conditions

- busy process: com.apple.Virtualization.VirtualMachine at 45.6% CPU
