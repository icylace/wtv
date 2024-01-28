#!/usr/bin/env bash

update_json() {
    local filter="$1"
    local file="$2"
    local tmp="$(mktemp)"

    if [ ! -f "$file" ] ; then
        echo '{}' > "$file"
    fi

    jq "$filter" "$file" > "$tmp" && mv -f "$tmp" "$file"
}

# ------------------------------------------------------------------------------

task_index() {
    local tasks=(
        'build'
        'check'
        'clean'
        'install'
        'lint'
        'release'
        'reset'
        'test'
        'wipe'
    )

    echo "Available tasks:"

    for task in ${tasks[@]} ; do
        echo -e "\t$task"
    done
}

# ------------------------------------------------------------------------------

task_build() {
    task_clean

    echo
    echo "Compiling TypeScript for production..."
    npx vite build

    echo
    echo "Generating types definition file..."
    npx tsup ./src/lib/wtv.ts --dts-only
    # npx tsup ./src/lib/wtv.ts --dts-only --legacy-output
    # https://github.com/vitejs/vite/issues/3461#issuecomment-857125201

    # echo
    # echo "Minifying and gzipping ES modules..."
    # npx terser --ecma 6 --compress --mangle --module --output ./dist/wtv.es.min.js -- ./dist/wtv.es.js
    # gzip --best --to-stdout ./dist/wtv.es.min.js > ./dist/wtv.es.min.js.gz
}

# ------------------------------------------------------------------------------

task_check() {
    echo
    echo "Typechecking TypeScript code..."
    npx tsc --noEmit --incremental false
}

# ------------------------------------------------------------------------------

task_clean() {
    echo
    echo "Cleaning the distribution folder..."
    rm -fr ./dist
}

# ------------------------------------------------------------------------------

task_install() {
    echo
    echo "Installing dependencies..."

    rm ./package-lock.json
    rm -fr ./node_modules

    update_json '.dependencies = {} | .devDependencies = {}' ./package.json

    local dev_modules=()

    # Language
    dev_modules+=('typescript')
    dev_modules+=('terser')
    dev_modules+=('tsup')

    # Linting
    # dev_modules+=('eslint')
    # dev_modules+=('@typescript-eslint/parser')
    # dev_modules+=('@typescript-eslint/eslint-plugin')
    # # dev_modules+=('eslint-plugin-import')
    # # dev_modules+=('eslint-plugin-json')
    # # dev_modules+=('eslint-plugin-node')
    # # dev_modules+=('eslint-plugin-promise')
    # # dev_modules+=('eslint-config-prettier')
    # # dev_modules+=('eslint-plugin-prettier')
    # # dev_modules+=('eslint-config-standard')
    # # dev_modules+=('eslint-plugin-standard')
    # # dev_modules+=('eslint-import-resolver-typescript')

    # Testing

    # Vite
    # Next Generation Frontend Tooling
    # https://vitejs.dev/
    dev_modules+=('vite')

    # Vitest
    # Next Generation Testing Framework
    # https://vitest.dev/
    dev_modules+=('vitest')

    # fast-check
    # Property based testing framework for JavaScript/TypeScript
    # https://fast-check.dev/
    dev_modules+=('fast-check')

    # @fast-check/vitest
    # Bring support for property-based testing into vitest.
    # https://fast-check.dev/docs/ecosystem/#fast-checkvitest-
    dev_modules+=('@fast-check/vitest')

    npm install --save-dev "${dev_modules[@]}"

    # Biome
    # One toolchain for your web project
    # https://biomejs.dev/
    npm install --save-dev --save-exact @biomejs/biome
}

# ------------------------------------------------------------------------------

task_lint() {
    echo
    echo "Linting..."
    npx eslint ./src --ext .js,.jsx,.ts,.tsx
}

# ------------------------------------------------------------------------------

# https://github.com/sindresorhus/np#release-script
task_release() {
    task_build
    echo
    echo "Releasing..."
    np --no-2fa
}

# ------------------------------------------------------------------------------

task_reset() {
    task_wipe
    task_install
    task_clean
}

# ------------------------------------------------------------------------------

task_test() {
    npx vitest
}

# ------------------------------------------------------------------------------

task_wipe() {
    echo
    echo "Wiping dependencies..."

    [ -f ./bun.lockb ] && rm ./bun.lockb
    [ -f ./package-lock.json ] && rm ./package-lock.json
    [ -d ./node_modules ] && rm -fr ./node_modules

    update_json '.dependencies = {} | .devDependencies = {}' ./package.json
}

# ------------------------------------------------------------------------------

if [ -z "$1" ] ; then
    task_index
    exit 1
fi

"task_$1"
