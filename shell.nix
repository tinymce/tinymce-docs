# This isn't a full nix-shell environment - you still need to run ./_scripts/init.sh,
# but this shell.nix will, at least, bootstrap the ruby environment.
let
  nixpkgs = import ./nixpin.nix {};
  nodePkgs = nixpkgs.pkgs.nodePackages;
  ui = nixpkgs.stdenv.mkDerivation rec {
    name = "tinymce-docs";
    version = "0.3.0.0";
    src = ./.;
    buildInputs = [
      nixpkgs.ruby
      nixpkgs.zlib
    ];
  };
in ui
