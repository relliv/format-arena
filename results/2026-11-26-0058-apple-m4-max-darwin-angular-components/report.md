# angular-components

> 2433 JavaScript and TypeScript, 124 JSON, 276 CSS, 434 SCSS, 278 Markdown, 4 YAML, 684 Angular templates files, formatted by 10 formatters. No formatter prints exactly what `prettier@3.10.1` prints in every language.

| | |
|---|---|
| **Machine** | Apple M4 Max, 16 cores, 48 GiB |
| **System** | macOS 27.0.1 (26A434), Node v26.0.0, local machine |
| **When** | 2026-11-26 00:58 UTC, 7 min |
| **Method** | check mode, median of 7 rounds after one warm-up per language; order rotated every round |
| **Reference** | `prettier@3.10.1`, with Prettier's default style written out |
| **Run** | `2026-11-26-0058-apple-m4-max-darwin-angular-components` |

## JavaScript and TypeScript

2433 files, 11.0 MiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 2433 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 2433 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 2432 (100.0%) | 1 | 0 | ⚠️ differs |
| `oxfmt@0.78.0` | 2394 (98.4%) | 39 | 0 | ⚠️ differs |
| `oxfmt@0.79.0` | 2394 (98.4%) | 39 | 0 | ⚠️ differs |
| `tidy@2.0.0` | 2338 (96.1%) | 95 | 0 | ⚠️ differs |
| `biome@2.6.7` | 2134 (87.7%) | 299 | 2 | ⚠️ differs |
| `biome@2.6.8` | 2134 (87.7%) | 299 | 2 | ⚠️ differs |
| `dprint@0.64.3` | 787 (32.3%) | 1646 | 0 | ⚠️ differs |
| `dprint@0.65.0` | 787 (32.3%) | 1646 | 0 | ⚠️ differs |

**Speed, as shipped** (check mode over all 2433 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.048 s** | 0.044 to 0.098 | 149.3× | 0.450 s | 45 MiB |
| `bun@1.4.4` | **0.073 s** | 0.070 to 0.099 | 98.2× | 0.810 s | 91 MiB |
| `dprint@0.65.0` | **0.122 s** | 0.121 to 0.145 | 58.9× | 1.47 s | 182 MiB |
| `biome@2.6.7` | **0.126 s** | 0.123 to 0.235 | 56.9× | 1.38 s | 223 MiB |
| `biome@2.6.8` | **0.128 s** | 0.124 to 0.174 | 56.2× | 1.38 s | 224 MiB |
| `dprint@0.64.3` | **0.130 s** | 0.120 to 0.174 | 55.4× | 1.49 s | 184 MiB |
| `oxfmt@0.78.0` | **0.424 s** | 0.393 to 0.442 | 16.9× | 4.63 s | 1165 MiB |
| `oxfmt@0.79.0` | **0.440 s** | 0.396 to 0.542 | 16.3× | 4.66 s | 1172 MiB |
| `prettier@3.10.1` | **7.18 s** | 7.09 to 7.66 | 1.0× | 12.66 s | 443 MiB |
| `prettier@3.9.10` | **7.21 s** | 6.83 to 7.38 | 1.0× | 12.56 s | 533 MiB |

**Speed, 1 thread** (check mode over all 2433 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `bun@1.4.4` | **0.199 s** | 0.194 to 0.219 | 36.2× | 0.190 s | 22 MiB |
| `tidy@2.0.0` | **0.246 s** | 0.233 to 0.272 | 29.2× | 0.230 s | 17 MiB |
| `oxfmt@0.78.0` | **1.10 s** | 1.07 to 1.22 | 6.5× | 1.51 s | 276 MiB |
| `oxfmt@0.79.0` | **1.11 s** | 1.08 to 1.16 | 6.4× | 1.50 s | 278 MiB |
| `dprint@0.65.0` | **1.17 s** | 1.14 to 1.26 | 6.2× | 1.23 s | 60 MiB |
| `dprint@0.64.3` | **1.17 s** | 1.15 to 1.29 | 6.2× | 1.24 s | 59 MiB |

## JSON

124 files, 117 KiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 124 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 124 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 124 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 124 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 124 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 124 (100.0%) | 0 | 0 | ✅ identical |
| `biome@2.6.7` | 123 (99.2%) | 1 | 1 | ⚠️ differs |
| `biome@2.6.8` | 123 (99.2%) | 1 | 1 | ⚠️ differs |
| `dprint@0.64.3` | 102 (82.3%) | 22 | 0 | ⚠️ differs |
| `dprint@0.65.0` | 102 (82.3%) | 22 | 0 | ⚠️ differs |

**Speed, as shipped** (check mode over all 124 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.006 s** | 0.006 to 0.007 | 23.2× | 0.010 s | 6 MiB |
| `bun@1.4.4` | **0.010 s** | 0.009 to 0.011 | 14.9× | 0.020 s | 18 MiB |
| `dprint@0.64.3` | **0.013 s** | 0.012 to 0.014 | 11.5× | 0.040 s | 34 MiB |
| `dprint@0.65.0` | **0.013 s** | 0.013 to 0.014 | 11.0× | 0.040 s | 35 MiB |
| `biome@2.6.7` | **0.014 s** | 0.013 to 0.014 | 10.7× | 0.030 s | 36 MiB |
| `biome@2.6.8` | **0.014 s** | 0.014 to 0.015 | 10.5× | 0.030 s | 36 MiB |
| `oxfmt@0.78.0` | **0.037 s** | 0.036 to 0.041 | 4.0× | 0.050 s | 71 MiB |
| `oxfmt@0.79.0` | **0.037 s** | 0.035 to 0.040 | 3.9× | 0.040 s | 71 MiB |
| `prettier@3.9.10` | **0.145 s** | 0.143 to 0.160 | 1.0× | 0.220 s | 119 MiB |
| `prettier@3.10.1` | **0.145 s** | 0.142 to 0.152 | 1.0× | 0.220 s | 119 MiB |

**Speed, 1 thread** (check mode over all 124 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.008 s** | 0.007 to 0.009 | 19.3× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.009 s** | 0.009 to 0.010 | 15.8× | 0.000 s | 8 MiB |
| `dprint@0.65.0` | **0.020 s** | 0.019 to 0.021 | 7.3× | 0.020 s | 32 MiB |
| `dprint@0.64.3` | **0.020 s** | 0.019 to 0.021 | 7.3× | 0.020 s | 31 MiB |
| `oxfmt@0.78.0` | **0.034 s** | 0.033 to 0.035 | 4.2× | 0.030 s | 63 MiB |
| `oxfmt@0.79.0` | **0.035 s** | 0.033 to 0.036 | 4.2× | 0.030 s | 63 MiB |

## CSS

276 files, 93 KiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 276 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 276 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 276 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 276 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 276 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 276 (100.0%) | 0 | 0 | ✅ identical |
| `biome@2.6.7` | 275 (99.6%) | 1 | 0 | ⚠️ differs |
| `biome@2.6.8` | 275 (99.6%) | 1 | 0 | ⚠️ differs |
| `dprint@0.64.3` | 245 (88.8%) | 31 | 8 | ⚠️ differs |
| `dprint@0.65.0` | 245 (88.8%) | 31 | 8 | ⚠️ differs |

**Speed, as shipped** (check mode over all 276 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.011 s** | 0.010 to 0.012 | 26.7× | 0.030 s | 6 MiB |
| `dprint@0.64.3` | **0.017 s** | 0.017 to 0.019 | 16.7× | 0.080 s | 35 MiB |
| `dprint@0.65.0` | **0.018 s** | 0.018 to 0.020 | 16.0× | 0.080 s | 36 MiB |
| `bun@1.4.4` | **0.019 s** | 0.019 to 0.033 | 15.2× | 0.130 s | 24 MiB |
| `biome@2.6.7` | **0.023 s** | 0.022 to 0.024 | 12.7× | 0.150 s | 39 MiB |
| `biome@2.6.8` | **0.023 s** | 0.022 to 0.025 | 12.6× | 0.150 s | 39 MiB |
| `oxfmt@0.79.0` | **0.048 s** | 0.046 to 0.050 | 6.0× | 0.190 s | 76 MiB |
| `oxfmt@0.78.0` | **0.048 s** | 0.047 to 0.052 | 6.0× | 0.190 s | 76 MiB |
| `prettier@3.9.10` | **0.290 s** | 0.288 to 0.325 | 1.0× | 0.460 s | 155 MiB |
| `prettier@3.10.1` | **0.290 s** | 0.287 to 0.315 | 1.0× | 0.460 s | 154 MiB |

**Speed, 1 thread** (check mode over all 276 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.015 s** | 0.015 to 0.016 | 18.7× | 0.000 s | 5 MiB |
| `bun@1.4.4` | **0.017 s** | 0.017 to 0.018 | 16.9× | 0.010 s | 9 MiB |
| `dprint@0.64.3` | **0.030 s** | 0.029 to 0.030 | 9.8× | 0.050 s | 31 MiB |
| `dprint@0.65.0` | **0.030 s** | 0.029 to 0.031 | 9.8× | 0.050 s | 32 MiB |
| `oxfmt@0.78.0` | **0.038 s** | 0.038 to 0.042 | 7.6× | 0.030 s | 64 MiB |
| `oxfmt@0.79.0` | **0.039 s** | 0.038 to 0.040 | 7.5× | 0.030 s | 64 MiB |

## SCSS

434 files, 1.1 MiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 434 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 380 (87.6%) | 54 | 0 | ⚠️ differs |
| `prettier@3.9.10` | 380 (87.6%) | 54 | 0 | ⚠️ differs |
| `tidy@2.0.0` | 380 (87.6%) | 54 | 0 | ⚠️ differs |
| `oxfmt@0.79.0` | 313 (72.1%) | 121 | 0 | ⚠️ differs |
| `oxfmt@0.78.0` | 312 (71.9%) | 122 | 0 | ⚠️ differs |
| `biome@2.6.7` | 257 (59.2%) | 177 | 2 | ⚠️ differs |
| `biome@2.6.8` | 257 (59.2%) | 177 | 2 | ⚠️ differs |
| `dprint@0.64.3` | 211 (48.6%) | 223 | 14 | ⚠️ differs |
| `dprint@0.65.0` | 211 (48.6%) | 223 | 14 | ⚠️ differs |

**Speed, as shipped** (check mode over all 434 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.012 s** | 0.012 to 0.013 | 69.1× | 0.080 s | 10 MiB |
| `bun@1.4.4` | **0.018 s** | 0.018 to 0.019 | 46.4× | 0.130 s | 30 MiB |
| `dprint@0.64.3` | **0.020 s** | 0.020 to 0.021 | 42.9× | 0.120 s | 40 MiB |
| `dprint@0.65.0` | **0.021 s** | 0.020 to 0.023 | 40.9× | 0.120 s | 41 MiB |
| `biome@2.6.7` | **0.025 s** | 0.025 to 0.027 | 33.6× | 0.180 s | 63 MiB |
| `biome@2.6.8` | **0.026 s** | 0.025 to 0.034 | 32.2× | 0.180 s | 63 MiB |
| `oxfmt@0.79.0` | **0.044 s** | 0.043 to 0.045 | 19.5× | 0.180 s | 91 MiB |
| `oxfmt@0.78.0` | **0.044 s** | 0.043 to 0.044 | 19.5× | 0.170 s | 90 MiB |
| `prettier@3.9.10` | **0.839 s** | 0.825 to 0.901 | 1.0× | 1.38 s | 184 MiB |
| `prettier@3.10.1` | **0.849 s** | 0.822 to 0.903 | 1.0× | 1.36 s | 181 MiB |

**Speed, 1 thread** (check mode over all 434 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `bun@1.4.4` | **0.030 s** | 0.029 to 0.032 | 28.2× | 0.020 s | 10 MiB |
| `tidy@2.0.0` | **0.030 s** | 0.029 to 0.032 | 28.1× | 0.020 s | 6 MiB |
| `oxfmt@0.79.0` | **0.055 s** | 0.054 to 0.057 | 15.6× | 0.050 s | 67 MiB |
| `oxfmt@0.78.0` | **0.055 s** | 0.054 to 0.058 | 15.4× | 0.050 s | 67 MiB |
| `dprint@0.64.3` | **0.073 s** | 0.071 to 0.074 | 11.6× | 0.090 s | 32 MiB |
| `dprint@0.65.0` | **0.073 s** | 0.071 to 0.075 | 11.6× | 0.080 s | 33 MiB |

## Markdown

278 files, 3.1 MiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 278 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 276 (99.3%) | 2 | 0 | ⚠️ differs |
| `bun@1.4.4` | 275 (98.9%) | 3 | 0 | ⚠️ differs |
| `tidy@2.0.0` | 268 (96.4%) | 10 | 0 | ⚠️ differs |
| `oxfmt@0.79.0` | 215 (77.3%) | 63 | 53 | ⚠️ differs |
| `oxfmt@0.78.0` | 214 (77.0%) | 64 | 53 | ⚠️ differs |
| `biome@2.6.7` | 166 (59.7%) | 112 | 65 | ⚠️ differs |
| `biome@2.6.8` | 166 (59.7%) | 112 | 65 | ⚠️ differs |
| `dprint@0.64.3` | 128 (46.0%) | 150 | 0 | ⚠️ differs |
| `dprint@0.65.0` | 128 (46.0%) | 150 | 0 | ⚠️ differs |

**Speed, as shipped** (check mode over all 278 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.018 s** | 0.018 to 0.019 | 142.1× | 0.080 s | 34 MiB |
| `bun@1.4.4` | **0.026 s** | 0.025 to 0.029 | 100.1× | 0.120 s | 87 MiB |
| `dprint@0.64.3` | **0.050 s** | 0.050 to 0.051 | 51.9× | 0.290 s | 127 MiB |
| `dprint@0.65.0` | **0.051 s** | 0.051 to 0.052 | 50.9× | 0.290 s | 127 MiB |
| `biome@2.6.8` | **0.076 s** | 0.075 to 0.084 | 34.1× | 0.270 s | 111 MiB |
| `biome@2.6.7` | **0.077 s** | 0.075 to 0.081 | 34.0× | 0.270 s | 108 MiB |
| `oxfmt@0.78.0` | **0.094 s** | 0.092 to 0.098 | 27.7× | 0.270 s | 207 MiB |
| `oxfmt@0.79.0` | **0.097 s** | 0.096 to 0.101 | 26.9× | 0.270 s | 210 MiB |
| `prettier@3.10.1` | **2.61 s** | 2.55 to 2.76 | 1.0× | 4.88 s | 827 MiB |
| `prettier@3.9.10` | **2.72 s** | 2.69 to 2.92 | 1.0× | 4.89 s | 757 MiB |

**Speed, 1 thread** (check mode over all 278 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.050 s** | 0.050 to 0.058 | 51.9× | 0.030 s | 24 MiB |
| `bun@1.4.4` | **0.053 s** | 0.053 to 0.058 | 49.0× | 0.040 s | 44 MiB |
| `oxfmt@0.78.0` | **0.135 s** | 0.132 to 0.142 | 19.3× | 0.150 s | 138 MiB |
| `oxfmt@0.79.0` | **0.135 s** | 0.134 to 0.151 | 19.3× | 0.150 s | 139 MiB |
| `dprint@0.64.3` | **0.207 s** | 0.204 to 0.220 | 12.6× | 0.220 s | 76 MiB |
| `dprint@0.65.0` | **0.212 s** | 0.204 to 0.213 | 12.3× | 0.230 s | 77 MiB |

## YAML

4 files, 4 KiB.

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 4 (100.0%) | 0 | 0 | ✅ identical |
| `biome@2.6.7` | 4 (100.0%) | 0 | 0 | ✅ identical |
| `biome@2.6.8` | 4 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 4 (100.0%) | 0 | 0 | ✅ identical |
| `dprint@0.64.3` | 4 (100.0%) | 0 | 0 | ✅ identical |
| `dprint@0.65.0` | 4 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.78.0` | 4 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 4 (100.0%) | 0 | 0 | ✅ identical |
| `prettier@3.9.10` | 4 (100.0%) | 0 | 0 | ✅ identical |
| `tidy@2.0.0` | 4 (100.0%) | 0 | 0 | ✅ identical |

**Speed, as shipped** (check mode over all 4 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.005 to 0.005 | 12.8× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.008 | 9.0× | 0.000 s | 10 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.009 to 0.011 | 6.4× | 0.010 s | 30 MiB |
| `biome@2.6.7` | **0.011 s** | 0.010 to 0.012 | 6.0× | 0.000 s | 28 MiB |
| `biome@2.6.8` | **0.011 s** | 0.010 to 0.011 | 5.9× | 0.000 s | 28 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.010 to 0.013 | 5.7× | 0.010 s | 31 MiB |
| `oxfmt@0.79.0` | **0.036 s** | 0.035 to 0.040 | 1.8× | 0.030 s | 66 MiB |
| `oxfmt@0.78.0` | **0.037 s** | 0.035 to 0.041 | 1.7× | 0.030 s | 66 MiB |
| `prettier@3.9.10` | **0.062 s** | 0.061 to 0.069 | 1.0× | 0.060 s | 78 MiB |
| `prettier@3.10.1` | **0.064 s** | 0.062 to 0.068 | 1.0× | 0.070 s | 78 MiB |

**Speed, 1 thread** (check mode over all 4 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.005 s** | 0.004 to 0.005 | 13.8× | 0.000 s | 4 MiB |
| `bun@1.4.4` | **0.007 s** | 0.007 to 0.008 | 9.4× | 0.000 s | 7 MiB |
| `dprint@0.64.3` | **0.010 s** | 0.010 to 0.011 | 6.2× | 0.010 s | 29 MiB |
| `dprint@0.65.0` | **0.011 s** | 0.010 to 0.012 | 5.7× | 0.000 s | 30 MiB |
| `oxfmt@0.79.0` | **0.032 s** | 0.032 to 0.034 | 2.0× | 0.020 s | 62 MiB |
| `oxfmt@0.78.0` | **0.033 s** | 0.031 to 0.035 | 1.9× | 0.020 s | 62 MiB |

## Angular templates

684 files, 908 KiB; 12 files left out because `prettier@3.10.1` cannot format them (run.json).

| Formatter | Same as reference | Differs | Left as they were | Result |
|---|--:|--:|--:|---|
| `prettier@3.10.1` | 684 (100.0%) | 0 | 0 | ✅ identical |
| `oxfmt@0.79.0` | 684 (100.0%) | 0 | 0 | ✅ identical |
| `bun@1.4.4` | 679 (99.3%) | 5 | 0 | ⚠️ differs |
| `oxfmt@0.78.0` | 679 (99.3%) | 5 | 0 | ⚠️ differs |
| `prettier@3.9.10` | 679 (99.3%) | 5 | 0 | ⚠️ differs |
| `tidy@2.0.0` | 299 (43.7%) | 385 | 25 | ⚠️ differs |
| `dprint@0.64.3` | 274 (40.1%) | 410 | 45 | ⚠️ differs |
| `dprint@0.65.0` | 274 (40.1%) | 410 | 45 | ⚠️ differs |
| `biome@2.6.8` | 209 (30.6%) | 475 | 50 | ⚠️ differs |
| `biome@2.6.7` | 207 (30.3%) | 477 | 50 | ⚠️ differs |

**Speed, as shipped** (check mode over all 684 files)

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.022 s** | 0.019 to 0.036 | 73.5× | 0.130 s | 14 MiB |
| `bun@1.4.4` | **0.036 s** | 0.035 to 0.039 | 46.4× | 0.330 s | 46 MiB |
| `biome@2.6.8` | **0.043 s** | 0.041 to 0.076 | 38.5× | 0.360 s | 63 MiB |
| `dprint@0.64.3` | **0.066 s** | 0.064 to 0.071 | 25.2× | 0.430 s | 46 MiB |
| `dprint@0.65.0` | **0.068 s** | 0.066 to 0.071 | 24.4× | 0.430 s | 47 MiB |
| `biome@2.6.7` | **0.071 s** | 0.041 to 0.077 | 23.3× | 0.720 s | 62 MiB |
| `oxfmt@0.78.0` | **0.589 s** | 0.513 to 0.645 | 2.8× | 7.57 s | 1490 MiB |
| `oxfmt@0.79.0` | **0.591 s** | 0.528 to 0.711 | 2.8× | 7.65 s | 1532 MiB |
| `prettier@3.9.10` | **1.60 s** | 1.53 to 1.85 | 1.0× | 2.51 s | 231 MiB |
| `prettier@3.10.1` | **1.65 s** | 1.62 to 1.87 | 1.0× | 2.54 s | 235 MiB |

**Speed, 1 thread** (check mode over all 684 files)

`prettier@3.10.1` has no thread setting, so "vs reference" compares with its run as shipped.

| Formatter | Wall | Range | vs reference | CPU | Peak |
|---|--:|--:|--:|--:|--:|
| `tidy@2.0.0` | **0.042 s** | 0.041 to 0.047 | 39.7× | 0.030 s | 8 MiB |
| `bun@1.4.4` | **0.048 s** | 0.047 to 0.060 | 34.6× | 0.040 s | 15 MiB |
| `dprint@0.64.3` | **0.289 s** | 0.282 to 0.309 | 5.7× | 0.340 s | 33 MiB |
| `dprint@0.65.0` | **0.293 s** | 0.288 to 0.323 | 5.6× | 0.350 s | 34 MiB |
| `oxfmt@0.78.0` | **1.41 s** | 1.38 to 1.57 | 1.2× | 2.17 s | 281 MiB |
| `oxfmt@0.79.0` | **1.45 s** | 1.43 to 1.50 | 1.1× | 2.21 s | 282 MiB |

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

- busy process: com.apple.Virtualization.VirtualMachine at 39.4% CPU
